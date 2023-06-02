class Api::MenuItemsController < ApplicationController
    # def index
    #     @menu_items = MenuItem.all
    #     render :index 
    #   end
    
    # def index 
    #     menu = Menu.find(params[:menu_id])
    #     restaurant_id = menu.restaurant_id
    #     menu_items = MenuItem.where(menu_id: params[:menu_id])
    # end 

    #   def show
    #     # @menu_item = MenuItem.find(params[:id])
    #     # render :show
    #   end
    
    #   private
    
    #   def menu_item_params
    #     params.require(:menu_item).permit(:item_name, :item_price, :menu_id, :description)
    #   end

    def show
        # @menu = Menu.find(params[:id])
        # render :show
        restaurant = Restaurant.find(params[:restaurant_id])
        menu = restaurant.menu
        render :show
      end
    
      private
    
      def menu_item_params
        params.require(:menu_item).permit(:item_name, :item_price, :description, :restaurant_id, :img_url)
      end


end
