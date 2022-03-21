Rails.application.routes.draw do
  namespace :admin do
    resources :categories
    resources :products do
      collection do
        get 'amazon'
        post 'amazon'
      end
    end
    resources :sites
    root to: 'products#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'products#index'

  get    'cart' => 'cart#show'
  put    'cart' => 'cart#update'
  patch  'cart' => 'cart#update'
  post   'cart' => 'cart#create'
  delete 'cart' => 'cart#destroy'

  get 'checkout' => 'cart#checkout'

  get 'about' => 'static#about'
  get 'feed' => 'products#feed'

  get 'favicon/manifest' => 'static#favicon_manifest'

  get ':slug' => 'products#show'
end
