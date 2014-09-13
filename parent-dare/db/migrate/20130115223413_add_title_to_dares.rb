class AddTitleToDares < ActiveRecord::Migration
  def change
    add_column :dares, :title, :string
  end
end
