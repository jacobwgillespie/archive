class AddTitleSloganToSite < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :title_slogan, :string
  end
end
