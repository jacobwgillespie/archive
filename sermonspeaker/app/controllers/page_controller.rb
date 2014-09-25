class PageController < ApplicationController
  respond_to :html, :json

  # These pages are static
  caches_page :about
  caches_page :contact

  def index

  # TODO: cache by user
    if user_signed_in? and current_user.has_followings?
      @sermons = current_user.followed_sermons.page params[:page]
      @customized = true
    else
      # TODO: add Sermon.front.page back
      @sermons = Sermon.page params[:page]
      @customized = false
    end

    respond_with @sermons
  end

  def about
  end

  def contact
  end

end
