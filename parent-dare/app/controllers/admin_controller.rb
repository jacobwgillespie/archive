class AdminController < ApplicationController

  before_filter :authenticate_user!

  respond_to :html

  def index
    @dares = Dare.all
    respond_with @dares
  end

  def move
    if dare = Dare.find(params[:id])
      dare.move_higher if params[:direction] == 'up'
      dare.move_lower if params[:direction] == 'down'
    end
    redirect_to admin_path
  end
end
