class Api::Movies::WatchlistController < ApplicationController
  before_action :authenticate_user!
  before_action :load_movie

  def update
    WatchlistMovie.where(user: current_user, movie: @movie).first_or_create
    flash[:notice] = "Added #{@movie.title} to your watchlist"
    render 'movies/show'
  end

  def destroy
    WatchlistMovie.where(user: current_user, movie: @movie).destroy_all
    flash[:notice] = "Removed #{@movie.title} from your watchlist"
    render 'movies/show'
  end

  private

  def load_movie
    @movie = Movie.find(params[:movie_id])
  end
end
