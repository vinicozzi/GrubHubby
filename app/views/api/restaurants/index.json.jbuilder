@restaurants.each do |restaurant|
    json.set! restaurant.id.to_s do
      json.id restaurant.id 
      json.name restaurant.name
      json.address restaurant.address
      json.description restaurant.description
      json.category restaurant.category
      json.hours restaurant.hours
      json.rating restaurant.rating
      json.review_count restaurant.review_count
      json.pricing_rating restaurant.pricing_rating
      json.photo restaurant.photo.attached? ? url_for(restaurant.photo) : nil
    end
  end