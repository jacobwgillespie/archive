class CreateAvailabilities < ActiveRecord::Migration
  def change
    create_table :availabilities do |t|
      t.references :movie, index: true, foreign_key: true
      t.string :source
      t.float :price
      t.string :external_id
      t.string :direct_url
      t.string :url

      t.timestamps null: false
    end
    add_index :availabilities, :source
    add_index :availabilities, :external_id
  end
end
