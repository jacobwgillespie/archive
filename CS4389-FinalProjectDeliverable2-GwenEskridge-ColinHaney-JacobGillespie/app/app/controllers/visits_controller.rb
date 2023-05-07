class VisitsController < ApplicationController
  before_action :authenticate_user!

  def index
    @visits = current_user.visits
  end

  def create
  end
end
