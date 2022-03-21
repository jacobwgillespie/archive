class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include Session
  include CurrentSite
  include Title
end
