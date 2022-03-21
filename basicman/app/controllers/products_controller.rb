class ProductsController < ApplicationController
  def index
    title 'Supplies'

    @categories = current_site.categories.includes(:products).all
  end

  def show
    @product = current_site.products.find_by_slug(params[:slug])
    redirect_to :root unless @product
    title @product.name
  end

  def feed
    @products = current_site.products.includes(:category).all
    send_data Product.to_csv(@products, request.host), filename: "products-#{Date.today}.csv"
  end
end
