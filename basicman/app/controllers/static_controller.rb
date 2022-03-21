class StaticController < ApplicationController
  def about
    title 'About'
  end

  def favicon_manifest
    render json: {
      name: current_site.name,
      icons: [],
      theme_color: '#ffffff',
      display: 'standalone',
    }
  end
end
