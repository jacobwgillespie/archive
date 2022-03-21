class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :original_language
      t.text :overview
      t.integer :runtime
      t.string :status
      t.string :certification
      t.date :theater_release_date
      t.date :dvd_release_date
      t.float :tmdb_popularity
      t.float :tmdb_vote_average
      t.integer :tmdb_vote_count
      t.float :imdb_vote_average
      t.integer :imdb_vote_count
      t.string :rt_critic_rating
      t.integer :rt_critic_score
      t.text :rt_critic_consensus
      t.string :rt_audience_rating
      t.integer :rt_audience_score
      t.string :homepage_url
      t.string :rt_url
      t.string :plugged_in_url
      t.string :imdb_id
      t.integer :rt_id
      t.string :backdrop_url
      t.string :poster_url
      t.integer :budget
      t.integer :revenue
      t.integer :plugged_in_rating
      t.string :plugged_in_caution_kids
      t.string :plugged_in_caution_teens
      t.string :plugged_in_caution_adults

      t.timestamps null: false
    end
    add_index :movies, :status
    add_index :movies, :certification
    add_index :movies, :theater_release_date
    add_index :movies, :dvd_release_date
    add_index :movies, :tmdb_popularity
    add_index :movies, :tmdb_vote_average
    add_index :movies, :tmdb_vote_count
    add_index :movies, :imdb_vote_average
    add_index :movies, :imdb_vote_count
    add_index :movies, :rt_critic_rating
    add_index :movies, :rt_critic_score
    add_index :movies, :rt_audience_rating
    add_index :movies, :rt_audience_score
    add_index :movies, :imdb_id
    add_index :movies, :rt_id
    add_index :movies, :budget
    add_index :movies, :revenue
    add_index :movies, :plugged_in_rating
    add_index :movies, :plugged_in_caution_kids
    add_index :movies, :plugged_in_caution_teens
    add_index :movies, :plugged_in_caution_adults
  end
end
