require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret 'de13746042da9e393a6e78d6c05596655052a17acd660c853e292db00a41719e'

  url_format '/media/images/:job/:name'

  if Rails.env.production?
    datastore(
      :s3,
      bucket_name: ENV.fetch('S3_BUCKET'),
      access_key_id: ENV.fetch('AMAZON_ACCESS_KEY'),
      secret_access_key: ENV.fetch('AMAZON_SECRET_KEY'),
    )
  else
    datastore(
      :file,
      root_path: Rails.root.join('public/system/dragonfly'),
      server_root: Rails.root.join('public'),
    )
  end
end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
