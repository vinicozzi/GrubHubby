@restaurants.each do |restaurant|
    json.set! restaurant.id.to_s do
      json.id restaurant.id 
      json.name restaurant.name
      json.address restaurant.address
      json.description restaurant.description
      json.hours restaurant.hours
      json.rating restaurant.rating
      json.review_count restaurant.review_count
      json.pricing_rating restaurant.pricing_rating
    end
  end