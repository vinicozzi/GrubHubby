class Api::MenusController < ApplicationController
      
        # def index
        #   @menus = Menu.all
        #   render :index 
        # end
      
        def show
          # @menu = Menu.find(params[:id])
          # render :show
          restaurant = Restaurant.find(params[:restaurant_id])
          menu = restaurant.menu
          render :show
        end
      
        private
      
        def menu_params
          params.require(:menu).permit(:restaurant_name, :menu_id, :description)
        end

end
