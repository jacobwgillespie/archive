ParentDare::Application.routes.draw do

  resources :dares
  resources :users
  resources :completions

  match '/admin' => 'admin#index', :as => :admin
  match '/admin/move/:id/:direction' => 'admin#move', :as => :move

  match '/auth/:provider/callback' => 'sessions#create'
  match '/auth/failure' => 'sessions#failure'
  match '/signout' => 'sessions#destroy', :as => :signout
  match '/signin' => 'sessions#new', :as => :signin

  root :to => 'dares#index'

end
