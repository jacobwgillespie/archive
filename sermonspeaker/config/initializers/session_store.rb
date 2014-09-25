# Be sure to restart your server when you modify this file.

#Sermonspeaker::Application.config.session_store :cookie_store, key: '_sermonspeaker_session'

Rails.application.config.middleware.insert_before(
  Rails.application.config.session_store,
  FlashSessionCookieMiddleware, 
  Rails.application.config.session_options[:key])

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
# Sermonspeaker::Application.config.session_store :active_record_store
