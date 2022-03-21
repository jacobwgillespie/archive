require 'administrate/base_dashboard'

class SiteDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    carts: Field::HasMany,
    categories: Field::HasMany,
    products: Field::HasMany,
    id: Field::Number,
    domain: Field::String,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    name: Field::String,
    subtitle: Field::String,
    contact_email: Field::String,
    title_slogan: Field::String,
    homepage_lede: TrixField,
    about_lede: TrixField,
    header_scripts: CodeField,
    footer_scripts: CodeField,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :name,
    :domain,
    :categories,
    :products,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :name,
    :subtitle,
    :domain,
    :contact_email,
    :title_slogan,
    :homepage_lede,
    :about_lede,
    :header_scripts,
    :footer_scripts,
    :created_at,
    :updated_at,
    :categories,
    :products,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :name,
    :subtitle,
    :domain,
    :contact_email,
    :title_slogan,
    :homepage_lede,
    :about_lede,
    :header_scripts,
    :footer_scripts,
  ].freeze

  # Overwrite this method to customize how sites are displayed
  # across all pages of the admin dashboard.
  def display_resource(site)
    site.name
  end
end
