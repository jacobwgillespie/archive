class AddListOrderToRelation < ActiveRecord::Migration
  def change
    add_column :relations, :list_order, :integer, :default => 0
    Relation.find_each do |relation|
      relation.update_column :list_order, relation.id
    end
  end
end
