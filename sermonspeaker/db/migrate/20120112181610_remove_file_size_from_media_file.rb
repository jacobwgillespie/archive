class RemoveFileSizeFromMediaFile < ActiveRecord::Migration
  def up
    remove_column :media_files, :file_size
  end

  def down
    add_column :media_files, :file_size, :integer
  end
end
