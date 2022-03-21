class CreateWatchlistMovies < ActiveRecord::Migration
  def change
    create_table :watchlist_movies do |t|
      t.references :user, index: true, foreign_key: true
      t.references :movie, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
