class AvailabilityLoadWorker
  include Sidekiq::Worker

  sidekiq_options unique: true, unique_job_expiration: 120 * 60, # 2 hours
                  throttle: {
                    threshold: 60, period: 1.minute, key: 'cisi-api'
                  },
                  queue: :canistreamit

  sidekiq_retry_in do |count|
    10 * (count + 1)
  end

  def perform(id)
    AvailabilityLoader.load(id)
  end
end
