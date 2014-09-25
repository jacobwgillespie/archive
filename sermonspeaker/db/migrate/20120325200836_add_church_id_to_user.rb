class AddChurchIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :church_id, :integer
    add_index :users, :church_id

  end
end
