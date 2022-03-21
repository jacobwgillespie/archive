class Api::Movies::LikeController < ApplicationController
  before_action :authenticate_user!
  before_action :load_movie

  def update
    MovieLike.where(user: current_user, movie: @movie).first_or_create
    flash[:notice] = "Added #{@movie.title} to your favorites"
    render 'movies/show'
  end

  def destroy
    MovieLike.where(user: current_user, movie: @movie).destroy_all
    flash[:notice] = "Removed #{@movie.title} from your favorites"
    render 'movies/show'
  end

  private

  def load_movie
    @movie = Movie.find(params[:movie_id])
  end
end
