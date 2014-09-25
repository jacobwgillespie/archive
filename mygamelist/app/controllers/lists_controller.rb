class ListsController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  respond_to :html, :json

  authorize_actions_for List

  def index
    #@lists = List.all
    #respond_with @lists

    # Redirect to requested user
    @user = User.find(params[:user_id])
    redirect_to @user
  end

  # GET /lists/1
  # GET /lists/1.json
  def show
    @list = List.find(params[:id])
    #authorize_action_for @list
    @user = User.find(params[:user_id])
    @games = Game.joins(:relations).where('relations.user_id' => @user.id, 'relations.list_id' => @list.id)
    respond_with @list
  end

  def new
    @list = List.new
    authorize_action_for @list
    respond_with @list
  end

  def edit
    @list = List.find(params[:id])
    authorize_action_for @list
  end

  def create
    @list = List.new(params[:list])
    authorize_action_for @list

    respond_to do |format|
      if @list.save
        format.html { redirect_to @list, notice: 'List was successfully created.' }
        format.json { render json: @list, status: :created, location: @list }
      else
        format.html { render action: "new" }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @list = List.find(params[:id])
    authorize_action_for @list

    respond_to do |format|
      if @list.update_attributes(params[:list])
        format.html { redirect_to @list, notice: 'List was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @list = List.find(params[:id])
    authorize_action_for @list
    @list.destroy

    respond_to do |format|
      format.html { redirect_to lists_url }
      format.json { head :no_content }
    end
  end
end
