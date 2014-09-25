class CreateChurches < ActiveRecord::Migration
  def change
    create_table :churches do |t|
      t.string :name
      t.text :info
      t.text :info_processed
      t.string :pay_token
      t.string :customer_token
      t.string :card_type
      t.string :card_digits
      t.string :subscription_status
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.float :latitude
      t.float :longitude
      t.boolean :currently_meeting
      t.string :photo
      t.string :status
      t.string :key
      t.references :user

      t.timestamps
    end
  end
end
