ASIN::Configuration.configure do |config|
  config.secret        = Rails.application.secrets.amazon_secret_key
  config.key           = Rails.application.secrets.amazon_access_key
  config.associate_tag = Rails.application.secrets.amazon_tag
end
