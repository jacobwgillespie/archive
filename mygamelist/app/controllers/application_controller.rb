class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :debug_params
  def debug_params
    return if true
    flash[:params] ||= []
    flash[:params] << params.to_s
  end
end
