class CreateCasts < ActiveRecord::Migration
  def change
    create_table :casts do |t|
      t.references :movie, index: true, foreign_key: true
      t.references :person, index: true, foreign_key: true
      t.string :character
      t.integer :order

      t.timestamps null: false
    end
    add_index :casts, :order
  end
end
