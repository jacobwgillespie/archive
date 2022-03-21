class CreateMovieLikes < ActiveRecord::Migration
  def change
    create_table :movie_likes do |t|
      t.references :movie, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
