@menu_items.each do |menu_item|
    json.set! menu_item.id.to_s do
      json.item_name menu_item.item_name
      json.item_price menu_item.item_price
      json.description menu_item.description
      json.menu_id menu_item.menu_id
    end
end