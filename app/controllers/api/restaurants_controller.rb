class Api::RestaurantsController < ApplicationController

    def index
      @restaurants = Restaurant.all
      render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        @menu_items = @restaurant.menu_items
        render :show
       
    end

    def category
        category = params[:category]
        restaurants = Restaurant.where(category: category)
        render json: restaurants
      end
      

    # def create
    #     @restaurant = Restaurant.create!(restaurant_params)
    #     render :show
    # end

    private

    def restaurant_params
            params.require(:restaurant).permit(
                :name,
                :address,
                :description,
                :hours,
                :category,
                :review_count,
                :pricing_rating,
                :img_url,
                :lat, 
                :lng
            )
    end


end