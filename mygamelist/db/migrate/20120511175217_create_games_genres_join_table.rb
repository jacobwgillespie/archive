class CreateGamesGenresJoinTable < ActiveRecord::Migration
  def change
    create_table :games_genres, :id => false do |t|
      t.integer :game_id
      t.integer :genre_id
    end
    add_index :games_genres, :game_id
    add_index :games_genres, :genre_id
  end
end
