class CreateRelations < ActiveRecord::Migration
  def change
    create_table :relations do |t|
      t.integer :user_id
      t.integer :game_id
      t.string :list

      t.timestamps
    end
    add_index :relations, :user_id
    add_index :relations, :game_id
    add_index :relations, :list
  end
end
