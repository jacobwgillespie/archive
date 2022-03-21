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

ActiveRecord::Schema.define(version: 20160816223338) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", id: :serial, force: :cascade do |t|
    t.string "asin"
    t.integer "cart_id"
    t.integer "product_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asin"], name: "index_cart_items_on_asin"
    t.index ["cart_id"], name: "index_cart_items_on_cart_id"
    t.index ["product_id"], name: "index_cart_items_on_product_id"
  end

  create_table "carts", id: :serial, force: :cascade do |t|
    t.string "asin"
    t.string "hmac"
    t.string "purchase_url"
    t.integer "item_count", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "site_id"
    t.index ["asin"], name: "index_carts_on_asin", unique: true
    t.index ["site_id"], name: "index_carts_on_site_id"
  end

  create_table "categories", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.text "description"
    t.integer "order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "site_id"
    t.index ["order"], name: "index_categories_on_order"
    t.index ["site_id"], name: "index_categories_on_site_id"
    t.index ["slug"], name: "index_categories_on_slug", unique: true
  end

  create_table "products", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.integer "order"
    t.string "asin"
    t.string "offer_id"
    t.decimal "price"
    t.text "description"
    t.integer "category_id"
    t.string "image_uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "site_id"
    t.text "directions", default: ""
    t.text "why", default: ""
    t.index ["asin"], name: "index_products_on_asin"
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["order"], name: "index_products_on_order"
    t.index ["site_id"], name: "index_products_on_site_id"
    t.index ["slug"], name: "index_products_on_slug", unique: true
  end

  create_table "sites", id: :serial, force: :cascade do |t|
    t.string "domain"
    t.string "homepage_image_uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.text "header_scripts", default: ""
    t.text "footer_scripts", default: ""
    t.string "subtitle"
    t.string "contact_email"
    t.string "title_slogan"
    t.text "homepage_lede", default: ""
    t.text "about_lede", default: ""
    t.index ["domain"], name: "index_sites_on_domain"
  end

  add_foreign_key "cart_items", "carts"
  add_foreign_key "cart_items", "products"
  add_foreign_key "carts", "sites"
  add_foreign_key "categories", "sites"
  add_foreign_key "products", "categories"
  add_foreign_key "products", "sites"
end
