json.restaurant do
    json.extract! @restaurant, :id, :name, :address, :description, :hours, :rating, :review_count, :pricing_rating, :menu_id, :created_at, :updated_at
end