class AddSlugToList < ActiveRecord::Migration
  def change
    add_column :lists, :slug, :string
    add_index :lists, :slug
  end
end
