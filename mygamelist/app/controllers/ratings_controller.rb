class RatingsController < ApplicationController

  before_filter :authenticate_user!, :except => :index

  respond_to :html, :json

  authorize_actions_for Rating, :actions => {:vote => :read}, :except => [:index, :show]

  def index
    @user = User.find(params[:user_id])
    @ratings = @user.ratings.has_review.page(params[:page])
    respond_with @ratings
  end

  def create
    @rating = Rating.new(params[:rating])
    authorize_action_for @rating

    current_user.rate_game!(@rating)

    respond_to do |format|
      format.html { redirect_to @rating.game }
      format.js
    end
  end

  def edit
    @rating = Rating.find(params[:id])
  end

  def update
    @rating = Rating.find(params[:id])
    authorize_action_for @rating
    @rating.update_attributes(params[:rating])
    authorize_action_for @rating
    current_user.rate_game!(@rating)
    respond_to do |format|
      format.html { redirect_to @rating.game }
      format.js
    end
  end

  def destroy
    @rating = Rating.find(params[:id])
    authorize_action_for @rating
    @rating.destroy

    respond_to do |format|
      format.html { redirect_to @rating.game }
      format.json { head :no_content }
    end
  end

  def vote
    @rating = Rating.find(params[:id])
    if @rating.user != current_user
      if params[:reset_vote]
        current_user.unvote_for(@rating)
      else
        @vote = !!params[:vote_for] ? true : false

        if @vote
          current_user.vote_exclusively_for(@rating)
        else
          current_user.vote_exclusively_against(@rating)
        end
      end
    end

    respond_to do |format|
      format.html { redirect_to @rating.game }
      format.js
    end
  end

end