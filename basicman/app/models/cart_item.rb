class CartItem < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  validates :cart, presence: true
  validates :product, presence: true

  after_create :cart_item_count_add
  def cart_item_count_add
    cart.update(item_count: cart.item_count + quantity)
  end

  after_destroy :cart_item_count_remove
  def cart_item_count_remove
    cart.update(item_count: cart.item_count - quantity)
  end

  after_update :cart_item_count_update
  def cart_item_count_update
    cart.update(item_count: cart.item_count - quantity_was + quantity)
  end

  delegate :price, to: :product

  def subtotal
    price * quantity
  end
end
