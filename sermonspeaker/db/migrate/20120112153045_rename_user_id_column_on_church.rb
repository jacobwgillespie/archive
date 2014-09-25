class RenameUserIdColumnOnChurch < ActiveRecord::Migration
  def change
    rename_column :churches, :user_id, :owner_id
  end
end
