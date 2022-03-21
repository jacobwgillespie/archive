class Site < ApplicationRecord
  has_many :carts
  has_many :categories
  has_many :products

  dragonfly_accessor :homepage_image
end
