class BumpProcessedAtWorker
  include Sidekiq::Worker

  sidekiq_options unique: true, unique_job_expiration: 120 * 60, # 2 hours
                  queue: :movie_data

  sidekiq_retry_in do |count|
    10 * (count + 1)
  end

  def perform(id)
    movie = Movie.find(id)
    movie.processed_at = Time.zone.now
    movie.save
  end
end
