json.menu do 
    json.extract! @menu, :id, :restaurant_name, :restaurant_id, :description, :created_at, :updated_at
end 