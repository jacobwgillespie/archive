class AddProcessedAtToMovie < ActiveRecord::Migration
  def change
    add_column :movies, :processed_at, :datetime
    add_index :movies, :processed_at
  end
end
