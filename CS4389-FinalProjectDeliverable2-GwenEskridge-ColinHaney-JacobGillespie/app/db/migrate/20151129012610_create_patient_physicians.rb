class CreatePatientPhysicians < ActiveRecord::Migration
  def change
    create_table :patient_physicians do |t|
      t.references :patient, index: true, foreign_key: true
      t.references :physician, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
