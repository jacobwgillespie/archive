class RemoveProcessedFromMediaFile < ActiveRecord::Migration
  def up
    remove_column :media_files, :processed
  end

  def down
    add_column :media_files, :processed, :boolean
  end
end
