class AddFollowingsCounterCacheFields < ActiveRecord::Migration
  def change
    add_column :churches, :followings_count, :integer, :default => 0
    add_column :speakers, :followings_count, :integer, :default => 0
    add_column :users, :followings_count, :integer, :default => 0
  end
end
