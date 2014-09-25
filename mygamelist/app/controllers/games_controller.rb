class GamesController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  authorize_actions_for Game, :actions => {:autocomplete => :read}, :except => [:index, :show]

  respond_to :html, :json

  def index
    @games = Game.page(params[:page]).per(12)
    respond_with @games do |format|
      format.js
    end
  end

  def autocomplete
    @games = Game.where(["LOWER(name) LIKE ?", "%#{params[:q].downcase}%"]).select(['id', 'name']).limit(15)
    respond_with @games
  end

  def show
    @game = Game.find(params[:id])
    #authorize_action_for @game
    respond_with @game
  end

  def new
    @game = Game.new
    authorize_action_for @game
    respond_with @game
  end

  def edit
    @game = Game.find(params[:id])
    authorize_action_for @game
  end

  def create
    @game = Game.new(params[:game])
    authorize_action_for @game

    respond_to do |format|
      if @game.save
        format.html { redirect_to @game, notice: 'Game was successfully created.' }
        format.json { render json: @game, status: :created, location: @game }
      else
        format.html { render action: "new" }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @game = Game.find(params[:id])
    authorize_action_for @game

    respond_to do |format|
      if @game.update_attributes(params[:game])
        format.html { redirect_to @game, notice: 'Game was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @game.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @game = Game.find(params[:id])
    authorize_action_for @game
    @game.destroy

    respond_to do |format|
      format.html { redirect_to games_url }
      format.json { head :no_content }
    end
  end
end
