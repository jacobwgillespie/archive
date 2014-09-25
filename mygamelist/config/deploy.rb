require "bundler/capistrano"  # automatically bundle on deploy
require 'capistrano_colors'   # colorize output

set :application, "mygamelist"
set :repository,  "git@github.com:jacobwg/mygamelist.git"

default_run_options[:pty] = true
set :deploy_via, :remote_cache

set :scm, :git
set :branch, "master"
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :deploy_to, '/home/ruby/mygamelist'

role :web, "jacobwg.xen.prgmr.com"                          # Your HTTP server, Apache/etc
role :app, "jacobwg.xen.prgmr.com"                          # This may be the same as your `Web` server
role :db,  "jacobwg.xen.prgmr.com", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

set :base_port, 6000  # should be a multiple of 1000

set :user, 'ruby' # SSH User

ssh_options[:forward_agent] = true

set :rvm_type, :system
#set :rvm_ruby_string, 'ree@rails3'                     # Or:
set :rvm_ruby_string, ENV['GEM_HOME'].gsub(/.*\//,"") # Read from local system

require "rvm/capistrano"                               # Load RVM's capistrano plugin.

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart do ; end
end

# If you are using Passenger mod_rails uncomment this:
# namespace :deploy do
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
# end

namespace :foreman do
  desc "Start the application services"
  task :start, :roles => :app do
    sudo "start #{application}"
  end

  desc "Stop the application services"
  task :stop, :roles => :app do
    sudo "stop #{application}"
  end

  desc "Restart the application services"
  task :restart, :roles => :app do
    run "sudo start #{application} || sudo restart #{application}"
  end

  desc "Display logs for a certain process - arg example: PROCESS=web-1"
  task :logs, :roles => :app do
    run "cd #{current_path}/log && cat #{ENV["PROCESS"]}.log"
  end

  desc "Export the Procfile to upstart scripts"
  task :export, :roles => :app do
    # 5 resque workers, 1 resque scheduler
    run "cd #{release_path} && rvmsudo foreman export upstart /etc/init -a #{application} -u #{user} -l #{shared_path}/log -p #{base_port}"
  end
end

after 'deploy:update', 'foreman:export'
after 'deploy:update', 'foreman:restart'

# .env files from shared

namespace :environment do
  desc "Symlink the .env file from shared"
  task :symlink, :roles => :app do
    run "cd #{current_path} && ln -sf #{shared_path}/.env .env"
  end
end

before 'foreman:export', 'environment:symlink'