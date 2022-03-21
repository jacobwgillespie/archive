module Session
  extend ActiveSupport::Concern

  included do
    helper_method :current_cart
    helper_method :current_items
  end

  def current_cart
    cart_id = session[:cart_id]
    @current_cart ||= cart_id ? Cart.where(id: cart_id).first || Cart.new : Cart.new
  end

  def current_items
    @current_items ||= current_cart.cart_items
  end
end
