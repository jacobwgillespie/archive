class CreateSermons < ActiveRecord::Migration
  def change
    create_table :sermons do |t|
      t.string :title
      t.date :published_at
      t.text :synopsis
      t.text :synopsis_processed
      t.string :key
      t.references :speaker

      t.timestamps
    end
  end
end
