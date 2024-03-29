Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :projects
    resources :rewards
    resources :categories, only: [:index, :show]
    resources :locations, only: [:index]
  end

  root "static_pages#root"
end
