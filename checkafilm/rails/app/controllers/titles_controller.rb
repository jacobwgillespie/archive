class TitlesController < ApplicationController

  respond_to :html, :json

  caches_action :search, :expires_in => 1.hour, :cache_path => proc { |c| {:query => c.params[:q]} }

  def index
    @new_releases = Title.new_releases
    @new_on_dvd = Title.new_on_dvd
    @recently_added = Title.recently_added
    @recently_updated = Title.recently_updated
    respond_with @recently_updated
  end

  def search
    if params[:q]
      @query = params[:q]
      @results = Tmdb.api_call 'search/movie', query: @query, language: 'en'
      if @results.nil?
        @results = []
      else
        @results = Tmdb.data_to_object(@results).results
      end
      respond_to do |format|
        format.html
      end
    else
      redirect_to :root
    end
  end

  def tmdb
    #begin
      movie = Tmdb.api_call 'movie', id: params[:id]
      if movie['imdb_id']
        redirect_to title_path(movie['imdb_id'])
      else
        redirect_to :root
      end
    #rescue Exception
    #  redirect_to :root
    #end
  end

  def show
    @title = Title.find_or_create_by(imdb_id: params[:id])
    #@title.async_load! if @title.fresh?
    respond_with @title do |format|
      format.json { render_for_api :public, :json => @title }
    end
  end

  def jobs
    @title = Title.find_by(imdb_id: params[:id])
    @jobs = @title.try :jobs
    @title.try :jobs_clear
    respond_with @title do |format|
      format.js
    end
  end

end
