class CreateVerseMentions < ActiveRecord::Migration
  def change
    create_table :verse_mentions do |t|
      t.integer :start
      t.integer :end
      t.text :verse
      t.string :reference

      t.timestamps
    end
  end
end
