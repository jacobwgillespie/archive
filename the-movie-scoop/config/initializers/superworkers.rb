Sidekiq::Superworker.options[:delete_subjobs_after_superjob_completes] = true
Sidekiq::Superworker.options[:superjob_expiration] = 2592000 # 1 month

Superworker.define(:MovieDataLoadWorker, :movie_id) do
  parallel do
    TmdbSimilarLoadWorker :movie_id
    TmdbLoadWorker :movie_id do
      parallel do
        ImdbLoadWorker :movie_id
        AvailabilityLoadWorker :movie_id
        RtDataLoadWorker :movie_id do
          RtReviewLoadWorker :movie_id
        end
      end
      CompositeScoreLoadWorker :movie_id
    end
  end
  BumpProcessedAtWorker :movie_id
end
