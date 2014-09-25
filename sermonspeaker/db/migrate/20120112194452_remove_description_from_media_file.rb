class RemoveDescriptionFromMediaFile < ActiveRecord::Migration
  def up
    remove_column :media_files, :description
  end

  def down
    add_column :media_files, :description, :string
  end
end
