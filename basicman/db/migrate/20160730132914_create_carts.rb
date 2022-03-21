class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :asin
      t.string :hmac
      t.string :purchase_url
      t.integer :item_count, default: 0
      t.string :site, default: 'basicman'

      t.timestamps
    end
    add_index :carts, :asin, unique: true
    add_index :carts, :site
  end
end
