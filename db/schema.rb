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

ActiveRecord::Schema.define(version: 2018_08_22_193232) do

  create_table "matches", force: :cascade do |t|
    t.integer "team_one_id"
    t.integer "team_two_id"
    t.integer "toss_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_one_id"], name: "index_matches_on_team_one_id"
    t.index ["team_two_id"], name: "index_matches_on_team_two_id"
    t.index ["toss_id"], name: "index_matches_on_toss_id"
  end

  create_table "members", force: :cascade do |t|
    t.integer "team_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_members_on_team_id"
    t.index ["user_id"], name: "index_members_on_user_id"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "match_id"
    t.integer "set"
    t.integer "score"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_scores_on_match_id"
    t.index ["team_id"], name: "index_scores_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
