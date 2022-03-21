class AddDisplayUsernameToUser < ActiveRecord::Migration
  def change
    add_column :users, :display_username, :string
  end
end
