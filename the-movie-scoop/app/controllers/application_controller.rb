class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action :flash_to_headers

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :remember_me, :name, :bio) }
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:login, :username, :email, :password, :remember_me) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation, :current_password, :name, :bio) }
  end

  def flash_to_headers
    response.headers['X-Flash'] = flash_json
    flash.discard
  end

  private

  def flash_json
    {
      error: flash[:error],
      warning: flash[:warning],
      notice: flash[:notice]
    }.delete_if { |_k, v| v.nil? }.to_json
  end
end
