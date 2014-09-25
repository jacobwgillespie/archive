class UsersController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  respond_to :html, :json

  authorize_actions_for User, :except => [:index, :show], :actions => {:me => :read}

  def index
    @users = User.all
    respond_with @users
  end

  def show
    @user = User.find(params[:id])
    #authorize_action_for(@user)
    respond_with @user
  end

  def me
    if user_signed_in?
      redirect_to current_user
    else
      redirect_to :root
    end
  end

  def edit
    @user = User.find(params[:id])
    authorize_action_for(@user)
  end

  def update
    @user = User.find(params[:id])
    authorize_action_for(@user)

    respond_to do |format|
      if @user.update_attributes(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

end
