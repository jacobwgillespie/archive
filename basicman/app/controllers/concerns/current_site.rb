module CurrentSite
  extend ActiveSupport::Concern

  included do
    helper_method :current_site
  end

  def current_site
    @current_site ||= Site.where(domain: params[:site] || request.host).first || Site.first
  end
end
