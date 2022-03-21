class CreateSites < ActiveRecord::Migration[5.0]
  def change
    create_table :sites do |t|
      t.string :domain
      t.string :homepage_image_uid

      t.timestamps
    end
    add_index :sites, :domain
  end
end
