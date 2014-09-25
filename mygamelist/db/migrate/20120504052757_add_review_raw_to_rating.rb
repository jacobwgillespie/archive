class AddReviewRawToRating < ActiveRecord::Migration
  def change
    add_column :ratings, :review_raw, :text
  end
end
