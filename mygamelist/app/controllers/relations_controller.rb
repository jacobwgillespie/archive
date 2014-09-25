class RelationsController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  authorize_actions_for Relation, :except => [:index, :show]

  respond_to :html, :json

  def index
    @relations = (user_id = params[:user_id]) ? Relation.where(:user_id => user_id) : Relation.all

    respond_with @relations
  end

  def show
    @relations = Relation.where(:user_id => params[:user_id]).where(:list => params[:id])
    @games = Game.joins(:relations).where('relations.user_id' => params[:user_id], 'relations.list' => params[:id])
    respond_with @games
  end

  def create
    @relation = Relation.new(params[:relation])
    @add_message = params[:add_message]
    @remove_message = params[:remove_message]

    @relation = current_user.add_game_to_list! @relation.game, @relation.list.name

    respond_to do |format|
      format.html { redirect_to @game }
      format.json
      format.js
    end
  end

  def update
    @relation = Relation.find(params[:id])
    if @relation.update_attributes(params[:relation])
      flash[:notice] = 'Relation updated'
    end
    respond_with @relation
  end

  def destroy
    @relation = Relation.find(params[:id])
    @add_message = params[:add_message]
    @remove_message = params[:remove_message]

    current_user.remove_game_from_list! @relation.game, @relation.list.name


    respond_to do |format|
      format.html { redirect_to @game }
      format.json
      format.js
    end
  end
end
