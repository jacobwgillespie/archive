class RenameUserIdColumnBackOnChurch < ActiveRecord::Migration
  def change
    rename_column :churches, :owner_id, :user_id
  end
end
