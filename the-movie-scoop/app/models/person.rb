class Person < ActiveRecord::Base
  has_many :casts
  has_many :crews
  has_many :cast_movies, through: :casts, source: :movie
  has_many :crew_movies, through: :crews, source: :movie

  def load_all
    load_from_tmdb
    self.processed_at = Time.now
    save
  end

  def load_from_tmdb
    data = Tmdb.person(id).deep_symbolize_keys!
    raise RefreshFailure unless data[:id]
    self.name = data[:name]
    self.bio = data[:biography]
    self.birthday = data[:birthday]
    self.deathday = data[:deathday]
    self.homepage = data[:homepage]
    self.birthplace = data[:place_of_birth]
    self.profile_url = data[:profile_path]
  end

  def random_movie
    cast_movies.order('RANDOM()').first || crew_movies.order('RANDOM()').first
  end
end
