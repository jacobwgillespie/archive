class AddBioRawToProfiles < ActiveRecord::Migration
  def change
    add_column :profiles, :bio_raw, :text
  end
end
