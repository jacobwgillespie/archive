class CreateGamePublisherJoinTable < ActiveRecord::Migration
  def change
    create_table :games_publishers, :id => false do |t|
      t.integer :game_id
      t.integer :publisher_id
    end
    add_index :games_publishers, :game_id
    add_index :games_publishers, :publisher_id
  end
end
