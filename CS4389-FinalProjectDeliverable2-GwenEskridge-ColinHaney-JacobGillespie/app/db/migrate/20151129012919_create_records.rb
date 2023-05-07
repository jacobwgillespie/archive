class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.date :exam_date
      t.references :physician, index: true, foreign_key: true
      t.references :patient, index: true, foreign_key: true
      t.float :height
      t.float :weight
      t.integer :pulse
      t.integer :blood_pressure_sys
      t.integer :blood_pressure_dia
      t.string :reason_code
      t.text :symptom_list
      t.text :prescription
      t.text :notes

      t.timestamps null: false
    end
  end
end
