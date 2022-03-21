class CreateCriticReviews < ActiveRecord::Migration
  def change
    create_table :critic_reviews do |t|
      t.references :movie, index: true, foreign_key: true
      t.string :critic
      t.date :date
      t.string :original_score
      t.string :freshness
      t.text :quote
      t.string :url

      t.timestamps null: false
    end
  end
end
