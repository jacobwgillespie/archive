class CompositeScoreLoadWorker
  include Sidekiq::Worker

  sidekiq_options unique: true, unique_job_expiration: 120 * 60, # 2 hours
                  queue: :composite_score

  sidekiq_retry_in do |count|
    10 * (count + 1)
  end

  def perform(id)
    CompositeScoreLoader.load(id)
  end
end
