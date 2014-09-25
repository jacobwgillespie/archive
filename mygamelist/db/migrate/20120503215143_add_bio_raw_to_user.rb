class AddBioRawToUser < ActiveRecord::Migration
  def change
    add_column :users, :bio_raw, :text
  end
end
