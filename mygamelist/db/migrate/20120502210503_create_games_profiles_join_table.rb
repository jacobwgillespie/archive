class CreateGamesProfilesJoinTable < ActiveRecord::Migration
  def change
    create_table :games_profiles, :id => false do |t|
      t.integer :game_id
      t.integer :profile_id
    end
    add_index :games_profiles, :game_id
    add_index :games_profiles, :profile_id
  end
end
