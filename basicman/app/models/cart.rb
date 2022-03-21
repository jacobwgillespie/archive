class Cart < ApplicationRecord
  has_many :cart_items
  has_many :products, through: :cart_items
  belongs_to :site

  before_save :validate_item_count
  def validate_item_count
    self.item_count = 0 if item_count < 0
  end

  def empty?
    item_count.zero?
  end

  def add_product(product, quantity = 1)
    quantity ||= 1
    return amazon_cart_create(product, quantity) unless asin

    cart_item = cart_item_for(product)
    return amazon_cart_modify(cart_item, cart_item.quantity + quantity) if cart_item

    amazon_cart_add(product, quantity)
  end

  def update_quantity(product, quantity = 1)
    quantity ||= 1
    return amazon_cart_create(product, quantity) unless asin

    cart_item = cart_item_for(product)
    return amazon_cart_modify(cart_item, quantity) if cart_item

    return if quantity.zero?

    amazon_cart_add(product, quantity)
  end

  def remove_product(product)
    cart_item = cart_item_for(product)
    amazon_cart_modify(cart_item, 0) if cart_item
  end

  def clear_items
    return unless asin
    amazon_cart_clear
  end

  def cart_item_for(product)
    cart_items.where(product: product).first
  end

  def checkout
    cart_items.destroy_all
    destination_url = purchase_url
    update(purchase_url: nil, asin: nil, hmac: nil)
    destination_url
  end

  private

  def amazon
    Amazon.client
  end

  def amazon_cart_create(product, quantity)
    response = amazon.cart_create(
      query: {
        'Item.1.OfferListingId' => product.offer_id,
        'Item.1.Quantity' => (quantity || 1),
      },
    )
    response = response.to_h
    response = response['CartCreateResponse']['Cart']
    update_from_amazon_response(response)
  end

  def amazon_cart_add(product, quantity)
    response = amazon.cart_add(
      query: {
        'CartId' => asin,
        'HMAC' => hmac,
        'Item.1.OfferListingId' => product.offer_id,
        'Item.1.Quantity' => (quantity || 1),
      },
    )
    response = response.to_h
    response = response['CartAddResponse']['Cart']
    update_from_amazon_response(response)
  end

  def amazon_cart_modify(cart_item, quantity)
    amazon.cart_modify(
      query: {
        'CartId' => asin,
        'HMAC' => hmac,
        'Item.1.CartItemId' => cart_item.asin,
        'Item.1.Quantity' => (quantity || 1),
      },
    )
    amazon_fetch_cart
  end

  def amazon_cart_clear
    amazon.cart_clear(
      query: {
        'CartId' => asin,
        'HMAC' => hmac,
      },
    )
    amazon_fetch_cart
  end

  def amazon_fetch_cart
    response = amazon.cart_get(
      query: {
        'CartId' => asin,
        'HMAC' => hmac,
      },
    )
    response = response.to_h
    response = response['CartGetResponse']['Cart']
    update_from_amazon_response(response)
  end

  def update_from_amazon_response(response)
    self.asin = response['CartId'] if response['CartId']
    self.purchase_url = response['PurchaseURL'] if response['PurchaseURL']
    self.hmac = response['HMAC'] if response['HMAC']
    save
    update_cart_items_from_response(response['CartItems'])
  end

  def update_cart_items_from_response(response)
    items = response ? response['CartItem'] : []
    items = [items] unless items.is_a? Array

    existing_asin = products.pluck(:asin)
    items_asin = items.pluck('ASIN')

    cart_items.includes(:product).where(
      products: { asin: (existing_asin - items_asin) },
    ).destroy_all

    existing_items = cart_items.includes(:product).to_a
    items.each do |item|
      existing_item = existing_items.detect { |e| e.product.asin == item['ASIN'] }

      if existing_item
        existing_item.update(quantity: item['Quantity'].to_i)
      else
        cart_items.create(
          asin: item['CartItemId'],
          product: Product.where(asin: item['ASIN']).first,
          quantity: item['Quantity'].to_i,
        )
      end
    end
  end
end
