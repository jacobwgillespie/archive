class AddListIdToRelation < ActiveRecord::Migration
  def change
    add_column :relations, :list_id, :integer
  end
end
