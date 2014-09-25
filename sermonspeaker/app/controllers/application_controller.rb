class ApplicationController < ActionController::Base
  protect_from_forgery
  rescue_from CanCan::AccessDenied do |exception|

    url = (request.env["HTTP_REFERER"].nil?) ? root_url : :back
    #redirect_to root_url, :notice => exception.message
    redirect_to url, :error => exception.message
  end

  before_filter :set_current_user
  def set_current_user
    User.current = current_user
  end

  before_filter :load_authorized_models #, :if => Proc.new { can?(:create, Sermon) or can?(:create, Speaker)}
  def load_authorized_models
    @authorized_churches = Church.accessible_by current_ability, :update
    @authorized_speakers = Speaker.accessible_by current_ability, :update
  end

  private


  def cache_render(key = nil, options = nil)
    key = key.yield if key.is_a? Proc
    key ||= request.fullpath
    key = ([key, request.format]).join '/'
    body = Rails.cache.read(key)
    if body
      render :text => body
    else
      yield if block_given?
      render unless performed?
      Rails.cache.write(key, response.body + key, options)
    end
  end

  def cache_render_by(key = nil, second = nil, options = nil, &block)
    key = key.yield if key.is_a? Proc
    second = second.yield if key.is_a? Proc
    key = ([key, second]).join '/'
    cache_render key, options, &block
  end

  def cache_render_by_user(key = nil, user = (Proc.new { current_user.nil? ? 0 : current_user.id }), options = nil, &block)
    user = user.yield if user.is_a? Proc
    user = (['user', user]).join '/'
    cache_render_by key, user, options, &block
  end

  def cache_render_by_test(key = nil, test = true, options = nil, &block)
    test = test.yield if test.is_a? Proc
    test = (['test', !!test]).join '/'
    cache_render_by key, test, options, &block
  end

  def cache_render_by_tests(key = nil, tests = [true], options = nil, &block)
    tests = tests.map! { |t| (t.is_a? Proc) ? !!t.yield : !!t }
    tests = (['tests'] + tests).join '/'
    cache_render_by key, tests, options, &block
  end


  ALL_FORMATS = [:html, :json, :xml, :js]

  def expire_cache_render(key = nil, format = :all, options = nil)
    if format == :all
      ALL_FORMATS.each { |f| expire_cache_render key, f, options }
    else
      key = key.yield if key.is_a? Proc
      key ||= request.fullpath
      key = ([key, request.format]).join '/'
      Rails.cache.delete(key)
    end
  end

  def expire_cache_render_by(key = nil, second = nil, format = :all, options = nil)
    key = key.yield if key.is_a? Proc
    second = second.yield if key.is_a? Proc
    key = ([key, second]).join '/'
    expire_cache_render key, format, options
  end

  def expire_cache_render_by_user(key = nil, user = (Proc.new { current_user.nil? ? 0 : current_user.id }), options = nil)
    user = user.yield if user.is_a? Proc
    user = (['user', user]).join '/'
    expire_cache_render_by key, user, options
  end

  def expire_cache_render_by_test(key = nil, outcomes = [true, false], options = nil)
    outcomes.each do |outcome|
      test = (['test', outcome]).flatten.join '/'
      expire_cache_render_by key, test, options
    end
  end

  DEFAULT_OUTCOMES = [true, false]

  def expire_cache_render_by_tests(key = nil, num_tests = 2, options = nil)
    DEFAULT_OUTCOMES.repeated_permutation(num_tests).to_a.each do |outcome|
      expire_cache_render_by_test key, outcome, options
    end
  end


  def build_facet_results search, facet_key, model, select_keys=[:name], &block
    facet_results = {}
    search.facet(facet_key).rows.each do |f|
      facet_results[f.value.to_s] = { :id => f.value, :count => f.count }
    end

    faceted_model_ids = facet_results.keys.map { |idx| idx.to_i }
    models = model.select(select_keys + [:id]).find faceted_model_ids

    models.each do |model|
      facet_results[model.id.to_s].update({ :text => yield(model) })
    end

    facet_results
  end

  def js_ability permission, value=true
    flash[:can] ||= {}
    flash[:can][permission] = value
    flash[:can][:keys] ||= []
    flash[:can][:keys] << permission
  end

  # was an around_filter
  before_filter :setup_common_permissions
  def setup_common_permissions
    # TODO: make users belong to churches so that I can read user.church_id instead of hit the DB
    #js_ability "update-church-#{current_user.church.id}", true if current_user and current_user.church
    #js_ability 'create-sermon', can?(:create, Sermon)
    #js_ability 'create-speaker', can?(:create, Speaker)
  end


  # TODO: figure out what this around_filter thing is as it broke all output above
  around_filter :write_flash_to_cookie
  def write_flash_to_cookie
    flash[:can] ||= {}
    yield if block_given?
    cookie_flash = if cookies['flash']
      begin
        ActiveSupport::JSON.decode(cookies['flash'])
      rescue
        {}
      end
    else
      {}
    end

    #Rails.logger.error flash.to_hash.to_s

    flash.to_hash.each do |key, value|
      #Rails.logger.error cookie_flash[key.to_s]
      #if cookie_flash[key.to_s].blank?
        cookie_flash[key.to_s] = value.kind_of?(Numeric) ? value.to_s : value
      #else
        # TODO: this is hackish
        #cookie_flash[key.to_s] << "<br/>#{value.to_json.to_s}"
      #end
    end

    cookies['can'] = flash.to_hash[:can].to_json.gsub('+', '%2B')

    cookies['flash'] = cookie_flash.to_json.gsub("+", "%2B")
    flash.clear
  end

end
