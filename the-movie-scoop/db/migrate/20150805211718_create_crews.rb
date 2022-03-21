class CreateCrews < ActiveRecord::Migration
  def change
    create_table :crews do |t|
      t.references :movie, index: true, foreign_key: true
      t.references :person, index: true, foreign_key: true
      t.string :job
      t.string :department

      t.timestamps null: false
    end
  end
end
