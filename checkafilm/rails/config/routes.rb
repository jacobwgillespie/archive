Checkafilm::Application.routes.draw do

  # Background jobs
  mount DjMon::Engine => 'dj_mon'

  # Title index and show
  match 'title' => 'titles#index', :as => :titles
  match 'title/:id' => 'titles#show', :as => :title
  match 'title/:id/jobs' => 'titles#jobs', :as => :title_jobs

  # Search
  match 'find' => 'titles#search', :as => :search

  # TMDb ID redirect
  match 'tmdb/:id' => 'titles#tmdb', :as => :tmdb_redirect

  # About page
  get 'about' => 'pages#about', :as => :about

  # Root page
  root :to => 'titles#index'
end
