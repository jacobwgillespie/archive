class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title
      t.text :body
      t.datetime :published_at
      t.string :slug

      t.timestamps null: false
    end
    add_index :lists, :slug, unique: true
  end
end
