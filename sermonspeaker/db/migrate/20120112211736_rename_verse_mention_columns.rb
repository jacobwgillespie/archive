class RenameVerseMentionColumns < ActiveRecord::Migration
  def change
    change_table :verse_mentions do |t|
      t.rename :verse, :verse_text
      t.rename :reference, :verse_reference
      t.rename :start, :start_verse
      t.rename :end, :end_verse
    end
  end
end
