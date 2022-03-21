class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :slug
      t.integer :order
      t.string :asin
      t.string :offer_id
      t.decimal :price
      t.text :description
      t.text :why, array: true
      t.text :directions, array: true
      t.references :category, foreign_key: true
      t.string :site, default: 'basicman'
      t.string :image_uid

      t.timestamps
    end
    add_index :products, :slug, unique: true
    add_index :products, :order
    add_index :products, :asin
    add_index :products, :site
  end
end
