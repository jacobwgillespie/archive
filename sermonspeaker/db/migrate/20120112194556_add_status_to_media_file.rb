class AddStatusToMediaFile < ActiveRecord::Migration
  def change
    add_column :media_files, :status, :string
  end
end
