CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',       # required
    :aws_access_key_id      => Settings.aws_key,       # required
    :aws_secret_access_key  => Settings.aws_secret,       # required
    :region                 => 'us-east-1'  # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = Settings.s3_bucket                     # required
end