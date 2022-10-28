Rails.application.routes.draw do
  get 'static_pages/home', to: "static_pages#help"
  get 'static_pages/help', to: "static_pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
