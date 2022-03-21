class AddContactEmailToSite < ActiveRecord::Migration[5.0]
  def change
    add_column :sites, :contact_email, :string
  end
end
