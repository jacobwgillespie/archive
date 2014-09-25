Sermonspeaker::Application.routes.draw do

  # Redirect www to no-www
  constraints(:host => /www.sermonspeaker.com/) do
    root :to => redirect('http://sermonspeaker.com', :status => 301)
    match '/*path', :to => redirect {|params| "http://sermonspeaker.com/#{params[:path]}"}
  end

  # Static Pages
  match 'about' => 'page#about'
  match 'contact' => 'page#contact'

  # User Dashboard
  # get "dashboard/index"
  match 'dashboard' => 'dashboard#index', :as => 'dashboard'

  # Search for Speakers (by Name)
  match '/speakers/search' => 'speakers#search', :as => 'speaker_search'

  # CRUD for Followings
  resources :followings, :only => [:create, :destroy]

  # CRUD for Speakers
  resources :speakers

  # Download for MediaFiles
  get '/media_files/:id/download' => 'media_files#download', :as => 'media_file_download'

  # Zencoder Callback URI
  post '/media_files/notify' => 'media_files#notify', :as => 'media_file_notification'

  # CRUD for MediaFiles
  resources :media_files, :only => [:show, :create, :update, :destroy]

  # Search for Churches (by Name)
  match '/churches/search' => 'churches#search', :as => :church_search

  # Search for Churches (by Location)
  match '/churches/near' => 'churches#geo', :as => :church_geosearch

  # CRUD for Churches
  resources :churches

  # Search for Sermons
  match 'sermons/search' => 'sermons#search', :as => 'sermons_search'

  # CRUD for Sermons
  resources :sermons

  # Partial Rendering of Sermon Media Files
  match '/sermons/:id/media_files' => 'sermons#media_files', :as => 'media_files_partial'

  # Devise Routes with Custom Versions (not currently using custom links)
  devise_for :users do
    get '/login' => 'devise/sessions#new'
    get '/logout' => 'devise/sessions#destroy'
    get '/signup' => 'devise/registrations#new'
  end

  # Index Page Maps to Sermons#Index
  root :to => "page#index"





  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
