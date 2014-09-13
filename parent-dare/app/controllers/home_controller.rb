class HomeController < ApplicationController
  def index
    if user_signed_in?
      @user = current_user
      @dare = @user.current_dare
      @completion = @user.completion_for(@dare)
    end
  end
end
