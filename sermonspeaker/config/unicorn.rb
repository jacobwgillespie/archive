worker_processes 3 # amount of unicorn workers to spin up
timeout 30         # restarts workers that hang for 30 seconds
preload_app true   # require for New Relic to work

after_fork do |server, worker|
  ActiveRecord::Base.establish_connection
end