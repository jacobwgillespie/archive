class CreateSermonVerseMentionJoinTable < ActiveRecord::Migration
  def change
    create_table :sermons_verse_mentions, :id => false do |t|
      t.integer :sermon_id
      t.integer :verse_mention_id
    end
  end
end
