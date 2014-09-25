class AddSlugToChurch < ActiveRecord::Migration
  def change
    add_column :churches, :slug, :string
  end
end
