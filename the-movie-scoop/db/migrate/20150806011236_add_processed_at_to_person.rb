class AddProcessedAtToPerson < ActiveRecord::Migration
  def change
    add_column :people, :processed_at, :datetime
    add_index :people, :processed_at
  end
end
