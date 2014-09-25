class AddBioProcessedToSpeaker < ActiveRecord::Migration
  def change
    add_column :speakers, :bio_processed, :text
  end
end
