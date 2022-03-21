class SanitizeArrayText < ActiveRecord::Migration[5.0]
  def up
    Product.find_each do |product|
      unless product.directions.empty?
        product.directions = product.directions.
          gsub(/^\["/, '<ul><li>').
          gsub(/"\]$/, '</li></ul>').
          gsub(/", "/, '</li><li>').
          gsub(/\\"/, '"')
      end

      unless product.why.empty?
        product.why = product.why.
          gsub(/^\["/, '<ul><li>').
          gsub(/"\]$/, '</li></ul>').
          gsub(/", "/, '</li><li>').
          gsub(/\\"/, '"')
      end

      product.save
    end
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
