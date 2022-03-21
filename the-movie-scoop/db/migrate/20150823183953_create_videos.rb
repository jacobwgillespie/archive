class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :name
      t.string :source
      t.string :key
      t.string :size
      t.string :kind
      t.string :language
      t.references :movie, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :videos, :key
    add_index :videos, :size
    add_index :videos, :kind
    add_index :videos, :language
  end
end
