class ChangeMoneyToBigint < ActiveRecord::Migration
  def change
    change_column :movies, :budget, :bigint
    change_column :movies, :revenue, :bigint
  end
end
