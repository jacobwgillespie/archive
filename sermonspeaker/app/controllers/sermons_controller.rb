class SermonsController < ApplicationController

  load_and_authorize_resource :except => :media_files

  # Caching
  #caches_action :index, :layout => false
  #caches_action :show, :layout => false


  respond_to :html, :json

  def index
    #@sermons = Sermon.all
    # TODO: add Sermon.front.page back
    @sermons = Sermon.page params[:page]
    respond_with @sermons
  end

  def search
    @query = query = params[:q]
    page = params[:page]

    @faceted = false
    @faceted = true unless (speaker = params[:speaker]).nil?
    @faceted = true unless (church = params[:church]).nil?

    date = params[:date]

    @search = Sermon.search do
      fulltext query
      paginate :page => page, :per_page => 20

      with(:speaker_id, speaker) if speaker
      with(:church_id, church) if church
      with(:published_at, Date.parse(date)) if date

      facet :speaker_id
      facet :church_id
    end

    @sermons = @search.results

    @faceted_churches = build_facet_results @search, :church_id, Church, [:name] do |church|
      church.name
    end

    @faceted_speakers = build_facet_results @search, :speaker_id, Speaker, [:first_name, :last_name] do |speaker|
      speaker.name
    end

    @show_facets = false
    @show_facets = true unless @faceted_churches.empty?
    @show_facets = true unless @faceted_speakers.empty?

    respond_with @sermons
  end

  def show
    @sermon = Sermon.includes(:speaker, :church).find(params[:id])
    respond_with @sermon
  end

  def media_files
    @sermon = Sermon.find(params[:id])
    respond_with do |format|
      format.html { render partial: 'media_files', locals: {sermon: @sermon} }
      format.json { render json: @sermon.media_files }
    end
  end

  def new
    @sermon = Sermon.new
    respond_with @sermon
  end

  def edit
    @sermon = Sermon.find(params[:id])
  end

  def create
    @sermon = Sermon.new(params[:sermon])

    if @sermon.save
      expire_action :action => :index
      expire_action :action => :show
      flash[:notice] = 'Sermon was successfully created.'
    end

    respond_with @sermon
  end

  def update
    @sermon = Sermon.find(params[:id])

    if @sermon.update_attributes(params[:sermon])
      expire_action :action => :index
      expire_action :action => :show
      flash[:notice] = 'Sermon was successfully updated.'
    end

    respond_with @sermon
  end

  def destroy
    @sermon = Sermon.find(params[:id])
    @sermon.destroy
    expire_action :action => :index
    respond_with @sermon
  end

end
