class Api::Movies::SeenController < ApplicationController
  before_action :authenticate_user!
  before_action :load_movie

  def update
    MovieSeen.where(user: current_user, movie: @movie).first_or_create
    flash[:notice] = "Marked #{@movie.title} as seen"
    render 'movies/show'
  end

  def destroy
    MovieSeen.where(user: current_user, movie: @movie).destroy_all
    flash[:notice] = "Removed #{@movie.title} from seen"
    render 'movies/show'
  end

  private

  def load_movie
    @movie = Movie.find(params[:movie_id])
  end
end
