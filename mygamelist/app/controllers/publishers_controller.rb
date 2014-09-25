class PublishersController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  respond_to :html, :json

  authorize_actions_for Publisher, :except => [:index, :show]


  def index
    @publishers = Publisher.all
    respond_with @publishers
  end

  def show
    @publisher = Publisher.find(params[:id])
    #authorize_action_for @publisher
    respond_with @publisher
  end

  def new
    @publisher = Publisher.new
    authorize_action_for @publisher
    respond_with @publisher
  end

  def edit
    @publisher = Publisher.find(params[:id])
    authorize_action_for @publisher
  end

  def create
    @publisher = Publisher.new(params[:publisher])
    authorize_action_for @publisher

    respond_to do |format|
      if @publisher.save
        format.html { redirect_to @publisher, notice: 'Publisher was successfully created.' }
        format.json { render json: @publisher, status: :created, location: @publisher }
      else
        format.html { render action: "new" }
        format.json { render json: @publisher.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @publisher = Publisher.find(params[:id])
    authorize_action_for @publisher

    respond_to do |format|
      if @publisher.update_attributes(params[:publisher])
        format.html { redirect_to @publisher, notice: 'Publisher was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @publisher.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @publisher = Publisher.find(params[:id])
    authorize_action_for @publisher
    @publisher.destroy

    respond_to do |format|
      format.html { redirect_to publishers_url }
      format.json { head :no_content }
    end
  end
end
