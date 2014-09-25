class GenresController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  respond_to :html, :json

  authorize_actions_for Genre, :except => [:index, :show]

  def index
    @genres = Genre.all
    respond_with @genres
  end

  def show
    @genre = Genre.find(params[:id])
    #authorize_action_for @genre
    respond_with @genre
  end

  def new
    @genre = Genre.new
    authorize_action_for @genre
    respond_with @genre
  end

  def edit
    @genre = Genre.find(params[:id])
    authorize_action_for @genre
  end

  def create
    @genre = Genre.new(params[:genre])
    authorize_action_for @genre

    respond_to do |format|
      if @genre.save
        format.html { redirect_to @genre, notice: 'Genre was successfully created.' }
        format.json { render json: @genre, status: :created, location: @genre }
      else
        format.html { render action: "new" }
        format.json { render json: @genre.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @genre = Genre.find(params[:id])
    authorize_action_for @genre

    respond_to do |format|
      if @genre.update_attributes(params[:genre])
        format.html { redirect_to @genre, notice: 'Genre was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @genre.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @genre = Genre.find(params[:id])
    authorize_action_for @genre
    @genre.destroy

    respond_to do |format|
      format.html { redirect_to genres_url }
      format.json { head :no_content }
    end
  end
end
