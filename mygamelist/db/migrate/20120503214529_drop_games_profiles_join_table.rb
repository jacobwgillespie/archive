class DropGamesProfilesJoinTable < ActiveRecord::Migration
  def change
    drop_table :games_profiles
  end
end
