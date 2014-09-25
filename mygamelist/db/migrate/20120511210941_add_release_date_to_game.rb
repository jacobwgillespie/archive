class AddReleaseDateToGame < ActiveRecord::Migration
  def change
    add_column :games, :release_date, :date
  end
end
