class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :profile_url
      t.date :birthday
      t.date :deathday
      t.string :bio
      t.string :homepage
      t.string :birthplace

      t.timestamps null: false
    end
  end
end
