class DropRoleableTables < ActiveRecord::Migration
  def change
    drop_table :roles
    drop_table :applied_roles
  end
end
