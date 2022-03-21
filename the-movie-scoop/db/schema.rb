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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150824225732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "availabilities", force: :cascade do |t|
    t.integer  "movie_id"
    t.string   "source"
    t.float    "price"
    t.string   "external_id"
    t.string   "direct_url"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "kind"
  end

  add_index "availabilities", ["external_id"], name: "index_availabilities_on_external_id", using: :btree
  add_index "availabilities", ["kind"], name: "index_availabilities_on_kind", using: :btree
  add_index "availabilities", ["movie_id"], name: "index_availabilities_on_movie_id", using: :btree
  add_index "availabilities", ["source"], name: "index_availabilities_on_source", using: :btree

  create_table "casts", force: :cascade do |t|
    t.integer  "movie_id"
    t.integer  "person_id"
    t.string   "character"
    t.integer  "order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "casts", ["movie_id"], name: "index_casts_on_movie_id", using: :btree
  add_index "casts", ["order"], name: "index_casts_on_order", using: :btree
  add_index "casts", ["person_id"], name: "index_casts_on_person_id", using: :btree

  create_table "crews", force: :cascade do |t|
    t.integer  "movie_id"
    t.integer  "person_id"
    t.string   "job"
    t.string   "department"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "crews", ["movie_id"], name: "index_crews_on_movie_id", using: :btree
  add_index "crews", ["person_id"], name: "index_crews_on_person_id", using: :btree

  create_table "critic_reviews", force: :cascade do |t|
    t.integer  "movie_id"
    t.string   "critic"
    t.date     "date"
    t.string   "original_score"
    t.string   "freshness"
    t.text     "quote"
    t.string   "url"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "critic_reviews", ["movie_id"], name: "index_critic_reviews_on_movie_id", using: :btree

  create_table "genres", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "list_movies", force: :cascade do |t|
    t.integer  "list_id"
    t.integer  "movie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "position"
    t.text     "comment"
  end

  add_index "list_movies", ["list_id"], name: "index_list_movies_on_list_id", using: :btree
  add_index "list_movies", ["movie_id"], name: "index_list_movies_on_movie_id", using: :btree
  add_index "list_movies", ["position"], name: "index_list_movies_on_position", using: :btree

  create_table "lists", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.datetime "published_at"
    t.string   "slug"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "user_id"
  end

  add_index "lists", ["slug"], name: "index_lists_on_slug", unique: true, using: :btree
  add_index "lists", ["user_id"], name: "index_lists_on_user_id", using: :btree

  create_table "movie_genres", force: :cascade do |t|
    t.integer  "movie_id"
    t.integer  "genre_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "movie_genres", ["genre_id"], name: "index_movie_genres_on_genre_id", using: :btree
  add_index "movie_genres", ["movie_id"], name: "index_movie_genres_on_movie_id", using: :btree

  create_table "movie_likes", force: :cascade do |t|
    t.integer  "movie_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "movie_likes", ["movie_id"], name: "index_movie_likes_on_movie_id", using: :btree
  add_index "movie_likes", ["user_id"], name: "index_movie_likes_on_user_id", using: :btree

  create_table "movie_seens", force: :cascade do |t|
    t.integer  "movie_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "movie_seens", ["movie_id"], name: "index_movie_seens_on_movie_id", using: :btree
  add_index "movie_seens", ["user_id"], name: "index_movie_seens_on_user_id", using: :btree

  create_table "movies", force: :cascade do |t|
    t.string   "title"
    t.string   "original_language"
    t.text     "overview"
    t.integer  "runtime"
    t.string   "status"
    t.string   "certification"
    t.date     "theater_release_date"
    t.date     "dvd_release_date"
    t.float    "tmdb_popularity"
    t.float    "tmdb_vote_average"
    t.integer  "tmdb_vote_count"
    t.float    "imdb_vote_average"
    t.integer  "imdb_vote_count"
    t.string   "rt_critic_rating"
    t.integer  "rt_critic_score"
    t.text     "rt_critic_consensus"
    t.string   "rt_audience_rating"
    t.integer  "rt_audience_score"
    t.string   "homepage_url"
    t.string   "rt_url"
    t.string   "plugged_in_url"
    t.string   "imdb_id"
    t.integer  "rt_id"
    t.string   "backdrop_url"
    t.string   "poster_url"
    t.integer  "budget",                    limit: 8
    t.integer  "revenue",                   limit: 8
    t.integer  "plugged_in_rating"
    t.string   "plugged_in_caution_kids"
    t.string   "plugged_in_caution_teens"
    t.string   "plugged_in_caution_adults"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.float    "composite_score"
    t.datetime "processed_at"
    t.string   "rt_api_review_link"
    t.text     "tagline"
  end

  add_index "movies", ["budget"], name: "index_movies_on_budget", using: :btree
  add_index "movies", ["certification"], name: "index_movies_on_certification", using: :btree
  add_index "movies", ["composite_score"], name: "index_movies_on_composite_score", using: :btree
  add_index "movies", ["dvd_release_date"], name: "index_movies_on_dvd_release_date", using: :btree
  add_index "movies", ["imdb_id"], name: "index_movies_on_imdb_id", using: :btree
  add_index "movies", ["imdb_vote_average"], name: "index_movies_on_imdb_vote_average", using: :btree
  add_index "movies", ["imdb_vote_count"], name: "index_movies_on_imdb_vote_count", using: :btree
  add_index "movies", ["plugged_in_caution_adults"], name: "index_movies_on_plugged_in_caution_adults", using: :btree
  add_index "movies", ["plugged_in_caution_kids"], name: "index_movies_on_plugged_in_caution_kids", using: :btree
  add_index "movies", ["plugged_in_caution_teens"], name: "index_movies_on_plugged_in_caution_teens", using: :btree
  add_index "movies", ["plugged_in_rating"], name: "index_movies_on_plugged_in_rating", using: :btree
  add_index "movies", ["processed_at"], name: "index_movies_on_processed_at", using: :btree
  add_index "movies", ["revenue"], name: "index_movies_on_revenue", using: :btree
  add_index "movies", ["rt_audience_rating"], name: "index_movies_on_rt_audience_rating", using: :btree
  add_index "movies", ["rt_audience_score"], name: "index_movies_on_rt_audience_score", using: :btree
  add_index "movies", ["rt_critic_rating"], name: "index_movies_on_rt_critic_rating", using: :btree
  add_index "movies", ["rt_critic_score"], name: "index_movies_on_rt_critic_score", using: :btree
  add_index "movies", ["rt_id"], name: "index_movies_on_rt_id", using: :btree
  add_index "movies", ["status"], name: "index_movies_on_status", using: :btree
  add_index "movies", ["theater_release_date"], name: "index_movies_on_theater_release_date", using: :btree
  add_index "movies", ["tmdb_popularity"], name: "index_movies_on_tmdb_popularity", using: :btree
  add_index "movies", ["tmdb_vote_average"], name: "index_movies_on_tmdb_vote_average", using: :btree
  add_index "movies", ["tmdb_vote_count"], name: "index_movies_on_tmdb_vote_count", using: :btree

  create_table "people", force: :cascade do |t|
    t.string   "name"
    t.string   "profile_url"
    t.date     "birthday"
    t.date     "deathday"
    t.string   "bio"
    t.string   "homepage"
    t.string   "birthplace"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.datetime "processed_at"
  end

  add_index "people", ["processed_at"], name: "index_people_on_processed_at", using: :btree

  create_table "sidekiq_jobs", force: :cascade do |t|
    t.string   "jid"
    t.string   "queue"
    t.string   "class_name"
    t.text     "args"
    t.boolean  "retry"
    t.datetime "enqueued_at"
    t.datetime "started_at"
    t.datetime "finished_at"
    t.string   "status"
    t.string   "name"
    t.text     "result"
  end

  add_index "sidekiq_jobs", ["class_name"], name: "index_sidekiq_jobs_on_class_name", using: :btree
  add_index "sidekiq_jobs", ["enqueued_at"], name: "index_sidekiq_jobs_on_enqueued_at", using: :btree
  add_index "sidekiq_jobs", ["finished_at"], name: "index_sidekiq_jobs_on_finished_at", using: :btree
  add_index "sidekiq_jobs", ["jid"], name: "index_sidekiq_jobs_on_jid", using: :btree
  add_index "sidekiq_jobs", ["queue"], name: "index_sidekiq_jobs_on_queue", using: :btree
  add_index "sidekiq_jobs", ["retry"], name: "index_sidekiq_jobs_on_retry", using: :btree
  add_index "sidekiq_jobs", ["started_at"], name: "index_sidekiq_jobs_on_started_at", using: :btree
  add_index "sidekiq_jobs", ["status"], name: "index_sidekiq_jobs_on_status", using: :btree

  create_table "similar_movies", force: :cascade do |t|
    t.integer  "movie_id"
    t.integer  "similar_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "similar_movies", ["movie_id"], name: "index_similar_movies_on_movie_id", using: :btree
  add_index "similar_movies", ["similar_id"], name: "index_similar_movies_on_similar_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.string   "display_username"
    t.text     "bio"
    t.string   "name"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "videos", force: :cascade do |t|
    t.string   "name"
    t.string   "source"
    t.string   "key"
    t.string   "size"
    t.string   "kind"
    t.string   "language"
    t.integer  "movie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "videos", ["key"], name: "index_videos_on_key", using: :btree
  add_index "videos", ["kind"], name: "index_videos_on_kind", using: :btree
  add_index "videos", ["language"], name: "index_videos_on_language", using: :btree
  add_index "videos", ["movie_id"], name: "index_videos_on_movie_id", using: :btree
  add_index "videos", ["size"], name: "index_videos_on_size", using: :btree

  create_table "watchlist_movies", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "movie_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "watchlist_movies", ["movie_id"], name: "index_watchlist_movies_on_movie_id", using: :btree
  add_index "watchlist_movies", ["user_id"], name: "index_watchlist_movies_on_user_id", using: :btree

  add_foreign_key "availabilities", "movies"
  add_foreign_key "casts", "movies"
  add_foreign_key "casts", "people"
  add_foreign_key "crews", "movies"
  add_foreign_key "crews", "people"
  add_foreign_key "critic_reviews", "movies"
  add_foreign_key "list_movies", "lists"
  add_foreign_key "list_movies", "movies"
  add_foreign_key "lists", "users"
  add_foreign_key "movie_genres", "genres"
  add_foreign_key "movie_genres", "movies"
  add_foreign_key "movie_likes", "movies"
  add_foreign_key "movie_likes", "users"
  add_foreign_key "movie_seens", "movies"
  add_foreign_key "movie_seens", "users"
  add_foreign_key "similar_movies", "movies"
  add_foreign_key "similar_movies", "movies", column: "similar_id"
  add_foreign_key "videos", "movies"
  add_foreign_key "watchlist_movies", "movies"
  add_foreign_key "watchlist_movies", "users"
end
