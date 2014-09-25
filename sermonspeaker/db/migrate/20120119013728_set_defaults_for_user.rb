class SetDefaultsForUser < ActiveRecord::Migration
  def up
    change_column_default :users, :role, 'User'
  end

  def down
    change_column :users, :role, :string, nil
  end
end
