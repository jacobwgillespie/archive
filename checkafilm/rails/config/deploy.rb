# For help in making your deploy script, see the Mina documentation:
#
#  - http://nadarei.co/mina
#  - http://nadarei.co/mina/tasks
#  - http://nadarei.co/mina/settings
#  - http://nadarei.co/mina/helpers

require 'mina/bundler'
require 'mina/rails'
require 'mina/git'

# Basic settings:
#   domain       - The hostname to SSH to.
#   deploy_to    - Path to deploy into.
#   repository   - Git repo to clone from. (needed by mina/git)
#   branch       - Branch name to deploy. (needed by mina/git)

set :domain, 'app.checkafilm.com'
set :deploy_to, '/data/apps/checkafilm'
set :repository, 'git://github.com/jacobwg/checkafilm.git'
set :branch, 'master'

# Manually create these paths in shared/ (eg: shared/config/database.yml) in your server.
# They will be linked in the 'deploy:link_shared_paths' step.
set :shared_paths, ['config/application.yml', 'config/newrelic.yml', 'log', 'public/montage.jpg']

# Optional settings:
set :user, 'web'    # Username in the server to SSH to.
#   set :port, '30000'     # SSH port number.

desc "Deploys the current version to the server."
task :deploy do
  deploy do
    # This makes asset compilation faster in Rails 3.2 -- remove this for other
    # Rails versions.
    invoke :'rails:optimize_for_3.2'

    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'rails:assets_precompile'

    queue "ln -sfv #{deploy_to}/shared/config/database.yml config/database.yml"

    to :launch do
      queue 'touch tmp/restart.txt'
      queue 'whenever -w checkafilm'
    end
  end
end
