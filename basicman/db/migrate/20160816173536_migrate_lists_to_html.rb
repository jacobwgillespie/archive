class MigrateListsToHtml < ActiveRecord::Migration[5.0]
  def up
    add_column :products, :directions_html, :text, default: ''
    add_column :products, :why_html, :text, default: ''

    Product.find_each do |product|
      unless product.directions.empty?
        items = product.directions.map { |i| "<li>#{i}</li>" }
        product.directions_html = "<ul>#{items.join('')}</ul>"
      end

      unless product.why.empty?
        items = product.why.map { |i| "<li>#{i}</li>" }
        product.why_html = "<ul>#{items.join('')}</ul>"
      end

      product.save
    end

    remove_column :products, :directions
    remove_column :products, :why

    rename_column :products, :directions_html, :directions
    rename_column :products, :why_html, :why
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
