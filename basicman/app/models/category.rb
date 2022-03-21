class Category < ApplicationRecord
  has_many :products
  belongs_to :site

  default_scope -> { order(order: :asc) }
  scope :for_site, -> (site) { where(site: site) }
end
