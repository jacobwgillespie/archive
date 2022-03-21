class Lists::MoviesController < ApplicationController
  before_action :authenticate_user!
  before_action :load_list
  before_action :load_movie

  def show
    respond_to do |format|
      format.html { render 'lists/movies/show', layout: false }
      format.js
    end
  end

  def update
    ListMovie.where(
      list: @list, movie: @movie
    ).first_or_create.update_attributes(movie_list_params)
    flash[:notice] = "Added #{@movie.title} to #{@list.title}"
    render :show
  end

  def destroy
    ListMovie.where(list: @list, movie: @movie).destroy_all
    flash[:notice] = "Remove #{@movie.title} from #{@list.title}"
    render :show
  end

  private

  def movie_list_params
    params.permit(:comments, :position)
  end

  def load_list
    @list = List.find(params[:list_id])
  end

  def load_movie
    @movie = Movie.find(params[:id])
  end
end
