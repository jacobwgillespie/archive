class AddFieldsToSite < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :name, :string, required: true
    add_column :sites, :header_scripts, :text, default: ''
    add_column :sites, :footer_scripts, :text, default: ''
  end
end
