class CreateListMovies < ActiveRecord::Migration
  def change
    create_table :list_movies do |t|
      t.references :list, index: true, foreign_key: true
      t.references :movie, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
