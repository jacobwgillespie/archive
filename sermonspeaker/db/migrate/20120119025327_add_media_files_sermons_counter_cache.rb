class AddMediaFilesSermonsCounterCache < ActiveRecord::Migration
  def up
    add_column :sermons, :media_files_count, :integer, :default => 0
  end

  def down
    remove_column :sermons, :media_files_count
  end
end
