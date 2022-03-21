class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :slug
      t.text :description
      t.integer :order
      t.string :site, default: 'basicman'

      t.timestamps
    end
    add_index :categories, :slug, unique: true
    add_index :categories, :order
    add_index :categories, :site
  end
end
