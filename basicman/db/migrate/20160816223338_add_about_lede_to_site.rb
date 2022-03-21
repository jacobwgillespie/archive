class AddAboutLedeToSite < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :about_lede, :text, default: ''
  end
end
