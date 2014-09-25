class AddIndexesToModels < ActiveRecord::Migration
  def change

    # Slug indexes for all models
    add_index :churches, :slug
    add_index :speakers, :slug
    add_index :sermons, :slug

    # Location indexes for churches
    add_index :churches, :latitude
    add_index :churches, :longitude

    # Foreign key indexes for all models
    add_index :churches, :user_id
    add_index :churches_users, :user_id
    add_index :churches_users, :church_id
    add_index :media_files, :sermon_id
    add_index :sermons, :speaker_id
    add_index :sermons_verse_mentions, :sermon_id
    add_index :sermons_verse_mentions, :verse_mention_id
    add_index :speakers, :church_id

    # Verse mentions count index for sermons
    add_index :sermons, :media_files_count

    # Verse reference index for verse mentions
    add_index :verse_mentions, :verse_reference

    # Published at date index for sermons
    add_index :sermons, :published_at

    # Currently meeting index for churches
    add_index :churches, :currently_meeting

    # First and last name indexes for speakers (for order by)
    add_index :speakers, :first_name
    add_index :speakers, :last_name

    # Name index for churches (for order by)
    add_index :churches, :name
  end
end
