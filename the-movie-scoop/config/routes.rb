require 'sidekiq/web'

Rails.application.routes.draw do
  devise_for :users
  # mount Sidekiq::Web => '/queues'
  mount Sidekiq::Monitor::Engine => '/queues'

  get 'about' => 'pages#about'
  get 'contact' => 'pages#contact'

  namespace :api, defaults: { format: :json } do
    resources :movies, only: [:index, :show] do
      resource :like,
               only: [:update, :destroy],
               controller: 'movies/like'
      resource :seen,
               only: [:update, :destroy],
               controller: 'movies/seen'
      resource :watchlist,
               only: [:update, :destroy],
               controller: 'movies/watchlist'
    end
  end

  resources :people, only: [:index, :show]
  resources :movies, only: [:index, :show]

  resources :users, only: [:index, :show] do
    resources :lists
  end

  resources :lists, only: [] do
    resources :movies,
              only: [:show, :update, :destroy],
              controller: 'lists/movies'
  end

  root 'movies#index'
end
