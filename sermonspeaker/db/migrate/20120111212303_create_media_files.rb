class CreateMediaFiles < ActiveRecord::Migration
  def change
    create_table :media_files do |t|
      t.string :name
      t.string :description
      t.string :file
      t.string :zencoder_output_id
      t.boolean :processed
      t.string :file
      t.string :asset_type
      t.integer :file_size
      t.string :content_type
      t.references :sermon

      t.timestamps
    end
  end
end
