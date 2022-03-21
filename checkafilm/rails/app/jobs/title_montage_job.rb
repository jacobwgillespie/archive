class TitleMontageJob
  extend Resque::Plugins::LockTimeout
  include Resque::Plugins::Status

  @queue = :titles

  def perform
    at(1, 2, 'Building montage...')
    Title.build_montage
    at(2, 2, 'Done!')
  end

  def self.identifier(uuid, options = {})
    "lock:#{name}-#{options.to_s}"
  end

end