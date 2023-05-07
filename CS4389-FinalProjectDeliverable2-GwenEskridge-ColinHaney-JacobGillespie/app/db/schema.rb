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

ActiveRecord::Schema.define(version: 20151130022921) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "billings", force: :cascade do |t|
    t.string   "insurance_provider"
    t.string   "policy_number"
    t.string   "insured_name"
    t.integer  "patient_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "billings", ["patient_id"], name: "index_billings_on_patient_id", using: :btree

  create_table "patient_authorized_physicians", force: :cascade do |t|
    t.integer  "patient_id"
    t.integer  "physician_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "patient_authorized_physicians", ["patient_id"], name: "index_patient_authorized_physicians_on_patient_id", using: :btree
  add_index "patient_authorized_physicians", ["physician_id"], name: "index_patient_authorized_physicians_on_physician_id", using: :btree

  create_table "patient_physicians", force: :cascade do |t|
    t.integer  "patient_id"
    t.integer  "physician_id"
    t.integer  "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "patient_physicians", ["patient_id"], name: "index_patient_physicians_on_patient_id", using: :btree
  add_index "patient_physicians", ["physician_id"], name: "index_patient_physicians_on_physician_id", using: :btree
  add_index "patient_physicians", ["user_id"], name: "index_patient_physicians_on_user_id", using: :btree

  create_table "patients", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "ethnicity"
    t.integer  "age"
    t.string   "sex"
    t.string   "primary_phone"
    t.string   "secondary_phone"
    t.string   "address_1"
    t.string   "address_2"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.integer  "user_id"
    t.integer  "physician_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "patients", ["physician_id"], name: "index_patients_on_physician_id", using: :btree
  add_index "patients", ["user_id"], name: "index_patients_on_user_id", using: :btree

  create_table "physicians", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "physicians", ["user_id"], name: "index_physicians_on_user_id", using: :btree

  create_table "records", force: :cascade do |t|
    t.date     "exam_date"
    t.integer  "physician_id"
    t.integer  "patient_id"
    t.float    "height"
    t.float    "weight"
    t.integer  "pulse"
    t.integer  "blood_pressure_sys"
    t.integer  "blood_pressure_dia"
    t.string   "reason_code"
    t.text     "symptom_list"
    t.text     "prescription"
    t.text     "notes"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "records", ["patient_id"], name: "index_records_on_patient_id", using: :btree
  add_index "records", ["physician_id"], name: "index_records_on_physician_id", using: :btree

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
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "billings", "patients"
  add_foreign_key "patient_authorized_physicians", "patients"
  add_foreign_key "patient_authorized_physicians", "physicians"
  add_foreign_key "patient_physicians", "patients"
  add_foreign_key "patient_physicians", "physicians"
  add_foreign_key "patient_physicians", "users"
  add_foreign_key "patients", "physicians"
  add_foreign_key "patients", "users"
  add_foreign_key "physicians", "users"
  add_foreign_key "records", "patients"
  add_foreign_key "records", "physicians"
end
