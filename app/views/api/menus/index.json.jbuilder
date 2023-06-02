@menus.each do |menu|
    json.set! menu.id.to_s do
      json.restaurant_name menu.restaurant_name
      json.restaurant_id menu.restaurant_id
      json.description menu.description
    end
end