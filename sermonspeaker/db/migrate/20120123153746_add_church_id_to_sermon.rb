class AddChurchIdToSermon < ActiveRecord::Migration
  def change
    add_column :sermons, :church_id, :integer
    add_index :sermons, :church_id
  end
end
