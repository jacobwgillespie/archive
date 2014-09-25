class FollowingsController < ApplicationController

  before_filter :authenticate_user!

  def create
    @following = Following.new(params[:following])
    @entity = @following.entity
    current_user.follow! @entity

    respond_to do |format|
      format.html { redirect_to @entity }
      format.json
      format.js
    end
  end

  def destroy
    @following = Following.find(params[:id])
    @entity = @following.entity
    current_user.unfollow! @entity

    respond_to do |format|
      format.html { redirect_to @entity }
      format.json
      format.js
    end
  end
end
