Rails.application.routes.draw do

  	root 'matches#index'
  	resources :matches do
    	resources :scores
  	end
  	resources :teams do
    	resources :members
  	end

  	resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
