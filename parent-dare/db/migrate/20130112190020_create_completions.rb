class CreateCompletions < ActiveRecord::Migration
  def change
    create_table :completions do |t|
      t.integer :user_id
      t.integer :dare_id

      t.timestamps
    end

    add_index :completions, :user_id
    add_index :completions, :dare_id
  end
end
