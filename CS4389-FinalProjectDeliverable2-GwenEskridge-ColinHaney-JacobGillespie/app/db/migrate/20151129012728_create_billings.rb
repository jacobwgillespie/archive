class CreateBillings < ActiveRecord::Migration
  def change
    create_table :billings do |t|
      t.string :insurance_provider
      t.string :policy_number
      t.string :insured_name
      t.references :patient, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
