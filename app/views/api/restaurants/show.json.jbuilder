json.restaurant do 
  json.extract! @restaurant, :id, :name, :address, :description, :hours, :rating, :review_count, :pricing_rating, :created_at, :updated_at
end 

# json.menu_items @restaurant.menu_items do |menu_item|
#   json.extract! menu_item, :id, :item_name, :item_price, :description, :img_url
# end

@restaurant.menu_items.each do |menu_item|
  json.menu_items do 
    json.set! menu_item.id do 
      json.extract! menu_item, :id, :item_name, :item_price, :description, :img_url
    end 
  end 
end