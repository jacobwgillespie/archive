class LoadPersonWorker
  include Sidekiq::Worker

  # sidekiq_options unique: true, unique_job_expiration: 120 * 60 # 2 hours

  sidekiq_retry_in do |count|
    60 * (count + 1) # (i.e. 10, 20, 30, 40)
  end

  def perform(id)
    begin
      person = Person.find(id)
      person.load_all unless person.processed_at? && person.processed_at >= 1.day.ago
    rescue RefreshFailure
      puts "Requeuing Person #{id}"
      LoadPersonWorker.perform_in(rand(0..60).seconds, id)
    end
    ActiveRecord::Base.connection_handler.clear_active_connections!
  end
end
