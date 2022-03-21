class MigrateSiteToModel < ActiveRecord::Migration[5.0]
  def up
    add_reference :carts, :site, index: true, foreign_key: true
    add_reference :categories, :site, index: true, foreign_key: true
    add_reference :products, :site, index: true, foreign_key: true

    site = Site.create(domain: 'basicman.co')

    Cart.where(site: 'basicman').update_all(site_id: site.id)
    Category.where(site: 'basicman').update_all(site_id: site.id)
    Product.where(site: 'basicman').update_all(site_id: site.id)

    remove_column :carts, :site
    remove_column :categories, :site
    remove_column :products, :site
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
