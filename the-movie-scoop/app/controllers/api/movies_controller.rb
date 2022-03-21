class Api::MoviesController < ApplicationController
  before_action :load_movie, only: [
    :show, :user_actions, :like, :unlike, :seen, :unseen
  ]
  before_action :authenticate_user!, only: [:like, :unlike, :seen, :unseen]

  def index
    # load movies
  end

  def show
  end

  private

  def load_movie
    @movie = Movie.where(id: params[:id]).first!
  end

  def render_user_actions
    respond_to do |format|
      format.html { render :user_actions, layout: false }
      format.js { render :user_actions }
    end
  end
end
