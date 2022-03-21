class CartController < ApplicationController
  def show
    title 'Cart'
    @cart = current_cart
  end

  def checkout
    redirect_to current_cart.checkout
  end

  def create
    current_cart.add_product(product, quantity)

    respond_to do |format|
      format.html { save_and_redirect }
      format.js { save }
    end
  end

  def update
    current_cart.update_quantity(product, quantity)

    respond_to do |format|
      format.html { save_and_redirect }
      format.js { save }
    end
  end

  def destroy
    product? ? current_cart.remove_product(product) : current_cart.clear_items

    respond_to do |format|
      format.html { save_and_redirect }
      format.js { save }
    end
  end

  private

  def save
    session[:cart_id] = current_cart.id
  end

  def save_and_redirect
    save
    redirect_to :cart
  end

  def product
    @product ||= Product.find(params[:product_id])
  end

  def quantity
    params[:quantity]
  end

  def product?
    !params[:product_id].nil?
  end
end
