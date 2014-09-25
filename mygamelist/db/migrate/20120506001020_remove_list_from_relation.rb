class RemoveListFromRelation < ActiveRecord::Migration
  def up
    remove_column :relations, :list
      end

  def down
    add_column :relations, :list, :string
  end
end
