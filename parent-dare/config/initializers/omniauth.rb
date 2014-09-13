Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, Settings.fb_id, Settings.fb_secret
end