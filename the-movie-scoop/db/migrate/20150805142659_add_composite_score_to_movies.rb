class AddCompositeScoreToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :composite_score, :float
    add_index :movies, :composite_score
  end
end
