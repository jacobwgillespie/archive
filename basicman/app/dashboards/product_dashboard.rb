require 'administrate/base_dashboard'

class ProductDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    category: Field::BelongsTo,
    site: Field::BelongsTo,
    id: Field::Number,
    name: Field::String,
    slug: Field::String,
    order: Field::Number,
    asin: Field::String,
    offer_id: Field::String,
    price: Field::String.with_options(searchable: false),
    description: TrixField,
    why: TrixField,
    directions: TrixField,
    image: ImageField,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :image,
    :name,
    :category,
    :order,
    :site,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :name,
    :slug,
    :category,
    :order,
    :site,
    :asin,
    :offer_id,
    :price,
    :description,
    :why,
    :directions,
    :image,
    :created_at,
    :updated_at,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :slug,
    :category,
    :order,
    :asin,
    :offer_id,
    :price,
    :description,
    :why,
    :directions,
    :image,
    :site,
  ].freeze

  # Overwrite this method to customize how products are displayed
  # across all pages of the admin dashboard.
  def display_resource(product)
    product.name
  end
end
