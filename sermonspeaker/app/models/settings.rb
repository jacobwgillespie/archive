class Settings < Settingslogic
  if ENV['HEROKU_SETTINGS'] == "yes"
    source "#{Rails.root}/config/application.heroku.yml"
  else
    if FileTest.exists?("#{Rails.root}/config/application.yml")
      source "#{Rails.root}/config/application.yml"
    else
      source "#{Rails.root}/config/application.sample.yml"
    end
  end
  namespace Rails.env
end