class SpeakersController < ApplicationController

  before_filter :authenticate_user!, :only => [:new, :edit, :create, :update, :destroy]
  load_and_authorize_resource

  respond_to :html, :json

  def index
    @speakers = Speaker.page params[:page]
    respond_with @speakers
  end

  def search
    @query = params[:n]
    @speakers = Speaker.search_with_solr @query, params[:page] # this is paginated
    respond_with @speakers
  end

  def show
    @speaker = Speaker.find(params[:id])
    respond_with @speaker
  end

  def new
    @speaker = Speaker.new
    respond_with @speaker
  end

  def edit
    @speaker = Speaker.find(params[:id])
  end

  def create
    @speaker = Speaker.new(params[:speaker])
    flash[:notice] = 'Speaker was successfully created.' if @speaker.save
    respond_with @speaker
  end

  def update
    @speaker = Speaker.find(params[:id])
    flash[:notice] = 'Speaker was successfully updated.' if @speaker.update_attributes(params[:speaker])
    respond_with @speaker
  end

  def destroy
    @speaker = Speaker.find(params[:id])
    # TODO: write better message text
    flash[:notice] = "Deleted" if @speaker.destroy
    respond_with @speaker
  end

end
