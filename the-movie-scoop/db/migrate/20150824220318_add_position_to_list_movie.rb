class AddPositionToListMovie < ActiveRecord::Migration
  def change
    add_column :list_movies, :position, :integer
    add_index :list_movies, :position
  end
end
