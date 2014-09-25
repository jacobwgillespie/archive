class AddDescriptionRawToGames < ActiveRecord::Migration
  def change
    add_column :games, :description_raw, :text
  end
end
