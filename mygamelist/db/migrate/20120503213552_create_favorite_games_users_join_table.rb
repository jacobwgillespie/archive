class CreateFavoriteGamesUsersJoinTable < ActiveRecord::Migration
  def change
    create_table :favorite_games_users, :id => false do |t|
      t.integer :game_id
      t.integer :user_id
    end
    add_index :favorite_games_users, :game_id
    add_index :favorite_games_users, :user_id
  end
end
