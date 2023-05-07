class CreatePatientAuthorizedPhysicians < ActiveRecord::Migration
  def change
    create_table :patient_authorized_physicians do |t|
      t.references :patient, index: true, foreign_key: true
      t.references :physician, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
