class CreateDares < ActiveRecord::Migration
  def change
    create_table :dares do |t|
      t.integer :day
      t.text :devotion

      t.timestamps
    end

    add_index :dares, :day
  end
end
