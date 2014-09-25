class ChurchesController < ApplicationController

  before_filter :authenticate_user!, :only => [:new, :edit, :create, :update, :destroy]
  load_and_authorize_resource

  respond_to :html, :json, :xml

  def index
    @churches = Church.page params[:page]
    respond_with @churches
  end

  def geo
    @churches = Church.near(params[:l]).page params[:page]
    respond_with @churches
  end

  def search
    @query = params[:n]
    @churches = Church.search_with_solr @query, params[:page]  # this is paginated
    respond_with @churches
  end

  def follow
    redirect_to :root
    render nil
  end

  def show
    @church = Church.with_relations.find(params[:id])
    @sermons = @church.try(:sermons).page params[:page]
    respond_with @churches
  end

  def new
    @church = Church.new

    respond_with @church
  end

  def edit
    @church = Church.find(params[:id])
  end

  def create
    @church = Church.new(params[:church])

    flash[:notice] = 'Church was successfully created.' if @church.save
    respond_with @church
  end

  def update
    @church = Church.find(params[:id])
    flash[:notice] = 'Church was successfully updated.' if @church.update_attributes(params[:church])
    respond_with @church
  end

  def destroy
    @church = Church.find(params[:id])
    @church.destroy
    respond_with @church
  end
end
