require 'rubygems'
require "bundler/setup"
Bundler.require(:default)
require 'sass/plugin/rack'
require './lib/app_icon'

use Sass::Plugin::Rack

class AppImgr < Sinatra::Base

  get '/' do
    haml :index       # erb :index
  end

  get %r{^/(\d+).png} do           # appimgr.com/325502379.png
    id = params[:captures][0]

    a = AppIcon.new({:id => id})
    redirect a.get_uri, 700
  end

  get %r{^/(small|medium|large)/(\d+).png} do           # appimgr.com/size/325502379.png
    size = params[:captures][0]
    id = params[:captures][1]


    a = AppIcon.new({:id => id, :size => size})
    redirect a.get_uri, 700
  end

end

