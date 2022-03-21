class FetchReviewInformationJob
  extend Resque::Plugins::LockTimeout
  include Resque::Plugins::Status

  @queue = :titles

  def perform
    title = Title.find(options['id'])
    at(1, 2, "At 1 of 2")
    title.fetch_review_information! if title
    at(2, 2, "At 2 of 2")
  end

  def self.identifier(uuid, options = {})
    "lock:#{name}-#{options.to_s}"
  end

end