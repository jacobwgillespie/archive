require 'csv'

class Product < ApplicationRecord
  belongs_to :category
  belongs_to :site

  default_scope -> { order(order: :asc) }
  scope :for_site, -> (site) { where(site: site) }

  dragonfly_accessor :image

  def image_square
    image.convert('-resize 360x360 -gravity center -extent 360x360')
  end

  def image_square_small
    image.convert('-resize 100x100 -gravity center -extent 100x100')
  end

  def image_square_large
    image.convert('-resize 600x600 -gravity center -extent 600x600')
  end

  def image_rectangle
    image.convert('-resize 600x900 -gravity center -extent 600x900')
  end

  def self.to_csv(products, host)
    CSV.generate(headers: true) do |csv|
      csv << %w(id availability condition description image_link link title price mpn)

      products.each do |product|
        csv << [
          product.id,
          'in stock',
          'new',
          product.description.gsub(/<[^>]+>/, ''),
          "https://#{host}#{product.image_square_large.url}",
          "https://#{host}/#{product.slug}",
          product.name,
          product.price,
          product.asin,
        ]
      end
    end
  end
end
