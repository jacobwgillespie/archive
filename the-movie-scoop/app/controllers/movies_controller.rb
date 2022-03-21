class MoviesController < ApplicationController
  before_action :load_movie, only: [:show]

  def index
    @top = Movie.order(tmdb_popularity: :desc).limit(16)
    @new_theaters = Movie.where(
      'theater_release_date < ? AND tmdb_popularity > ?', Time.zone.today, 3
    ).order(theater_release_date: :desc).limit(16)
    @new_dvd = Movie.where(
      'dvd_release_date < ? AND tmdb_popularity > ?', Time.zone.today, 3
    ).order(dvd_release_date: :desc).limit(16)
    @movie = Movie.random_top_movie
  end

  def show
  end

  private

  def load_movie
    @movie = Movie.where(id: params[:id]).first!
  end
end
