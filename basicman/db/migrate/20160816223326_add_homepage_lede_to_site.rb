class AddHomepageLedeToSite < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :homepage_lede, :text, default: ''
  end
end
