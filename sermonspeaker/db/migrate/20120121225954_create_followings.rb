class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :entity_id
      t.string :entity_type
      t.integer :user_id

      t.timestamps
    end

    add_index :followings, :user_id
    add_index :followings, [:entity_id, :entity_type]

  end
end
