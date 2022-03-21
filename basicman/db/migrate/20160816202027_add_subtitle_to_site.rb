class AddSubtitleToSite < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :subtitle, :string
  end
end
