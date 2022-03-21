class AddRtApiReviewLinkToMovie < ActiveRecord::Migration
  def change
    add_column :movies, :rt_api_review_link, :string
  end
end
