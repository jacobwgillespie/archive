class AddCommentToListMovie < ActiveRecord::Migration
  def change
    add_column :list_movies, :comment, :text
  end
end
