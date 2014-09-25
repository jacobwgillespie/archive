class API < Grape::API
  version 'v1', :using => :header, :vendor => 'twitter'

  format :json
  default_format :json

  helpers do
    def warden
      env['warden']
    end

    def current_user
      @current_user ||= warden.user
    end

    def authenticate!
      error!('401 Unauthorized', 401) unless warden.authenticated?
    end
  end

  resource :statuses do
    get :public_timeline do
      "hi"
    end
  end

  resource :account do
    before { authenticate! }

    get '/private' do
      "Congratulations, you found the secret!"
    end
  end

end