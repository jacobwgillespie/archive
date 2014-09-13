class AddDareIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :dare_id, :integer
  end
end
