class TmdbSimilarLoadWorker
  include Sidekiq::Worker

  sidekiq_options unique: true, unique_job_expiration: 120 * 60, # 2 hours
                  throttle: {
                    threshold: 40, period: 10.seconds, key: 'tmdb-api'
                  },
                  queue: :tmdb

  sidekiq_retry_in do |count|
    10 * (count + 1)
  end

  def perform(id, page, enqueue)
    TmdbSimilarLoader.load(id, page, enqueue)
  end
end
