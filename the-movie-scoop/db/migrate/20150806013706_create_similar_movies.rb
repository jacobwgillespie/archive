class CreateSimilarMovies < ActiveRecord::Migration
  def change
    create_table :similar_movies do |t|
      t.references :movie, index: true, foreign_key: true
      t.references :similar, index: true

      t.timestamps null: false
    end

    add_foreign_key :similar_movies, :movies, column: 'similar_id'
  end
end
