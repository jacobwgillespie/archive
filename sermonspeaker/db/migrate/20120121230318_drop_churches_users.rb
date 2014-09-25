class DropChurchesUsers < ActiveRecord::Migration
  def change
    drop_table :churches_users
  end
end
