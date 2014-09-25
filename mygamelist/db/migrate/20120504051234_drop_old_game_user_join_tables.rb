class DropOldGameUserJoinTables < ActiveRecord::Migration
  def change
    drop_table :owned_games_users
    drop_table :favorite_games_users
    drop_table :hated_games_users
  end
end
