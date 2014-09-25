# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120325200836) do

  create_table "churches", :force => true do |t|
    t.string   "name"
    t.text     "info"
    t.text     "info_processed"
    t.string   "pay_token"
    t.string   "customer_token"
    t.string   "card_type"
    t.string   "card_digits"
    t.string   "subscription_status"
    t.string   "street"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.float    "latitude"
    t.float    "longitude"
    t.boolean  "currently_meeting"
    t.string   "photo"
    t.string   "status"
    t.string   "key"
    t.integer  "user_id"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
    t.string   "slug"
    t.integer  "followings_count",    :default => 0
  end

  add_index "churches", ["currently_meeting"], :name => "index_churches_on_currently_meeting"
  add_index "churches", ["latitude"], :name => "index_churches_on_latitude"
  add_index "churches", ["longitude"], :name => "index_churches_on_longitude"
  add_index "churches", ["name"], :name => "index_churches_on_name"
  add_index "churches", ["slug"], :name => "index_churches_on_slug"
  add_index "churches", ["user_id"], :name => "index_churches_on_user_id"

  create_table "followings", :force => true do |t|
    t.integer  "entity_id"
    t.string   "entity_type"
    t.integer  "user_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "followings", ["entity_id", "entity_type"], :name => "index_followings_on_entity_id_and_entity_type"
  add_index "followings", ["user_id"], :name => "index_followings_on_user_id"

  create_table "media_files", :force => true do |t|
    t.string   "name"
    t.string   "file"
    t.string   "job_id"
    t.string   "asset_type"
    t.string   "content_type"
    t.integer  "sermon_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "status"
    t.text     "callback_text"
  end

  add_index "media_files", ["sermon_id"], :name => "index_media_files_on_sermon_id"

  create_table "sermons", :force => true do |t|
    t.string   "title"
    t.date     "published_at"
    t.text     "synopsis"
    t.text     "synopsis_processed"
    t.string   "key"
    t.integer  "speaker_id"
    t.datetime "created_at",                        :null => false
    t.datetime "updated_at",                        :null => false
    t.string   "slug"
    t.integer  "media_files_count",  :default => 0
    t.integer  "church_id"
  end

  add_index "sermons", ["church_id"], :name => "index_sermons_on_church_id"
  add_index "sermons", ["media_files_count"], :name => "index_sermons_on_media_files_count"
  add_index "sermons", ["published_at"], :name => "index_sermons_on_published_at"
  add_index "sermons", ["slug"], :name => "index_sermons_on_slug"
  add_index "sermons", ["speaker_id"], :name => "index_sermons_on_speaker_id"

  create_table "sermons_verse_mentions", :id => false, :force => true do |t|
    t.integer "sermon_id"
    t.integer "verse_mention_id"
  end

  add_index "sermons_verse_mentions", ["sermon_id"], :name => "index_sermons_verse_mentions_on_sermon_id"
  add_index "sermons_verse_mentions", ["verse_mention_id"], :name => "index_sermons_verse_mentions_on_verse_mention_id"

  create_table "speakers", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "title"
    t.text     "bio"
    t.string   "photo"
    t.string   "key"
    t.integer  "church_id"
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
    t.string   "slug"
    t.text     "bio_processed"
    t.integer  "followings_count", :default => 0
  end

  add_index "speakers", ["church_id"], :name => "index_speakers_on_church_id"
  add_index "speakers", ["first_name"], :name => "index_speakers_on_first_name"
  add_index "speakers", ["last_name"], :name => "index_speakers_on_last_name"
  add_index "speakers", ["slug"], :name => "index_speakers_on_slug"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "",     :null => false
    t.string   "encrypted_password",     :default => "",     :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                                 :null => false
    t.datetime "updated_at",                                 :null => false
    t.string   "name"
    t.string   "role",                   :default => "User"
    t.integer  "followings_count",       :default => 0
    t.integer  "church_id"
  end

  add_index "users", ["church_id"], :name => "index_users_on_church_id"
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "verse_mentions", :force => true do |t|
    t.integer  "start_verse"
    t.integer  "end_verse"
    t.text     "verse_text"
    t.string   "verse_reference"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "verse_mentions", ["verse_reference"], :name => "index_verse_mentions_on_verse_reference"

end
