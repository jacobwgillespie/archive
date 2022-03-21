class RtReviewLoadWorker
  include Sidekiq::Worker

  sidekiq_options unique: true, unique_job_expiration: 120 * 60, # 2 hours
                  throttle: {
                    threshold: 7, period: 1.minute, key: 'rt-api'
                  },
                  queue: :rottentomatoes

  sidekiq_retry_in do |count|
    10 * (count + 1)
  end

  def perform(id)
    RtReviewLoader.load(id)
  end
end
