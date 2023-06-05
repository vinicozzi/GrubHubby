Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # namespace :api do
  #   get '/session', to: 'sessions#show'
  # end

  # post 'api/test', to: 'application#test'

  # namespace :api, defaults: { format: :json } do
  #   resources :users, only: [:create, :update, :show]
  #   resources :restaurants, only: [:index, :show] do 
  #     resources :menus, only: [:index, :show] do 
  #       resources :menu_items, only: [:index, :show] 
  #     end 
  #   end 
  #   resource :session, only: [:show, :create, :destroy]
  # end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resources :restaurants, only: [:index, :show]
    resource :session, only: [:create, :show, :destroy]
  end


end
