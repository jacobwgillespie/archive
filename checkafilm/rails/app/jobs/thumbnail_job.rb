class ThumbnailJob
  extend Resque::Plugins::LockTimeout
  include Resque::Plugins::Status

  @queue = :trailers

  def perform
    trailer = Trailer.find(options['id'])
    at(1, 2, "At 1 of 2")
    trailer.fetch_thumbnail! if trailer
    at(2, 2, "At 2 of 2")
  end

  def self.identifier(uuid, options = {})
    "lock:#{name}-#{options.to_s}"
  end
end
