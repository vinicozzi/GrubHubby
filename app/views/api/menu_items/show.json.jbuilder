json.menu_item do 
    json.extract! @menu_item, :id, :item_name, :item_price, :menu_id, :description, :created_at, :updated_at
end 