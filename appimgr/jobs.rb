require "bundler/setup"
Bundler.require(:default)
require './lib/app_icon'

include Stalker

job 'app_icon.process' do |args|
  app = AppIcon.new(args)
  app.process
end

