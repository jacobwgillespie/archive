class ListsController < ApplicationController
  before_action :load_list, only: [:show, :edit, :update, :destroy]

  def index
    @lists = List.all
  end

  def show
  end

  def new
    @list = List.new
  end

  def edit
  end

  def create
    @list = List.new(list_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @list.save
        add_first_movie if has_first_movie?
        format.html { redirect_to [@list.user, @list], notice: 'List was successfully created.' }
        format.json { render :show, status: :created, location: [@list.user, @list] }
      else
        format.html { render :new }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to @list, notice: 'List was successfully updated.' }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @list.destroy
    respond_to do |format|
      format.html { redirect_to lists_url, notice: 'List was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def has_first_movie?
    !params[:first_movie].nil?
  end

  def add_first_movie
    @list.movies << Movie.find(params[:first_movie])
  end

  def load_list
    @list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:title, :body)
  end
end
