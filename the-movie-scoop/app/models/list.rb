class List < ActiveRecord::Base
  belongs_to :user
  has_many :list_movies
  has_many :movies, through: :list_movies

  def has_movie?(movie)
    movies.include?(movie)
  end
end
