Rails.application.routes.draw do
  get 'home', to: "static_pages#home"
  get 'help', to: "static_pages#help"
  get 'about', to: "static_pages#about", as: "aboot"
  get 'contact-us', to: "static_pages#contact_us"
  get 'signup', to: "users#new"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static_pages#home"
end
