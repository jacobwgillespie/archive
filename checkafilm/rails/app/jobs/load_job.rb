class LoadJob
  extend Resque::Plugins::LockTimeout
  include Resque::Plugins::Status

  @queue = :titles

  def perform
    title_id = options['id']['$oid']['$oid']
    title = Title.find(title_id)
    return unless title

    at(0, 5, 'Fetching basic data...')
    title.fetch_basic_data!
    #FetchBasicDataJob.create(id: title_id)

    at(1, 5, 'Fetching images...')
    title.fetch_images!
    #FetchImagesJob.create(id: title_id)

    at(2, 5, 'Fetching trailers...')
    title.fetch_trailers!
    #FetchTrailersJob.create(id: title_id)

    at(3, 5, 'Fetching review information...')
    title.fetch_review_information!
    #FetchReviewInformationJob.create(id: title_id)

    at(4, 5, 'Fetching Plugged In review...')
    title.fetch_plugged_in_review!
    #FetchPluggedInReviewJob.create(id: title_id)

    at(5, 5, 'All done!')
    title.make_loaded! if title.fresh?
  end

  def self.identifier(uuid, options = {})
    "lock:#{name}-#{options.to_s}"
  end

end
