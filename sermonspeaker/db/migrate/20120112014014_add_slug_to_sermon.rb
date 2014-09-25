class AddSlugToSermon < ActiveRecord::Migration
  def change
    add_column :sermons, :slug, :string
  end
end
