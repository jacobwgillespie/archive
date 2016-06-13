module SpreeCms
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      include ::Rails::Generators::Migration
      
      source_root File.expand_path('../templates', __FILE__)
  
      def self.next_migration_number(dirname)
        if ActiveRecord::Base.timestamped_migrations
          Time.now.utc.strftime("%Y%m%d%H%M%S%L")
        else
          "%.3d" % (current_migration_number(dirname) + 1)
        end
      end
      
      def copy_assets
        directory "public", "public"
      end
      
      def copy_config_files
        copy_file "config/disqus_config.yml", "config/disqus_config.yml"
      end
      
      def generate_migrations
        migration_template "db/migrate/create_pages.rb", "db/migrate/create_pages.rb" rescue true
        migration_template "db/migrate/create_posts.rb", "db/migrate/create_posts.rb" rescue true
        migration_template "db/migrate/add_display_name_to_user.rb", "db/migrate/add_display_name_to_user.rb" rescue true
        migration_template "db/migrate/is_taggable_migration.rb", "db/migrate/is_taggable_migration.rb" rescue true
      end
      
      def generate_routes
        # route('resources :posts')
        #         route('match "'+Spree::Config[:cms_permalink]+'/tags/:tag_name" => "posts#tags", :as => "tag_posts"')
        #         route('resources :pages')
        #         route('namespace :admin do
        #           resource :cms_settings
        #           resources :posts
        #           resources :pagess
        #         end')
      end
      
    end
  end
end