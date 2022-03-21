class CriticReview < ActiveRecord::Base
  belongs_to :movie

  default_scope -> { order(date: :desc) }
end
