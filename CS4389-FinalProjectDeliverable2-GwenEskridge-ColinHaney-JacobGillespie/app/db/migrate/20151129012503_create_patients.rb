class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :ethnicity
      t.integer :age
      t.string :sex
      t.string :primary_phone
      t.string :secondary_phone
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :state
      t.string :zip
      t.references :user, index: true, foreign_key: true
      t.references :physician, column: :primary_physician_id, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
