CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => Settings.aws_key,
    :aws_secret_access_key  => Settings.aws_secret,
  }
  config.fog_directory  = Settings.s3_bucket
  config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}
end
