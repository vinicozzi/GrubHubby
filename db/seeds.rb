# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"


  puts "Destroying tables..."
  User.destroy_all
  MenuItem.destroy_all
  Restaurant.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('menu_items')
  ApplicationRecord.connection.reset_pk_sequence!('restaurants')

  puts "Creating users..."
  User.create!(
    first_name: 'Demo',
    last_name: 'Bop',
    phone_number: '1234567890',
    address: '23 Hardwick Drive, Huntington, New York',
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  10.times do 
    User.create!(
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone_number: Faker::Number.number(digits: 10),
      address: Faker::Address.full_address,
      email: Faker::Internet.email,
      password: 'password'
    ) 
  end

  puts "Done!"

  10.times do |index|
    restaurant = Restaurant.create!(
      name: Faker::Restaurant.name,
      address: Faker::Address.full_address,
      description: Faker::Lorem.paragraph,
      hours: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now).strftime('%I:%M %p'),
      rating: Faker::Number.decimal(l_digits: 1, r_digits: 1),
      review_count: Faker::Number.between(from: 10, to: 100),
      pricing_rating: Faker::Number.between(from: 1, to: 5),
      # img_url: URI.open("https://grubhubby-seeds.s3.amazonaws.com/grub-images/rest/r#{index + 1}.jpg")
    )

    puts "Created restaurant: #{restaurant.name}"

    6.times do |menu_index|
      menu_item = restaurant.menu_items.create!(
        item_name: Faker::Food.dish,
        item_price: Faker::Commerce.price(range: 5.0..20.0),
        description: Faker::Lorem.paragraph,
      )

      puts "Created menu item: #{menu_item.item_name} for restaurant: #{restaurant.name}"
    end
  end

  puts "Menu, Menu, Menu... AND MORE!"


  puts "AWS, HERE IT COMES"

Restaurant.all.each_with_index do |restaurant, index|
  restaurant.photo.attach(io: URI.open("https://grubhubby-seeds.s3.amazonaws.com/grub-images/rest/r#{index + 1}.jpg"), filename: "r#{index + 1}.jpg")
end

MenuItem.all.each_with_index do |menuItem, index|
  menuItem.photo.attach(io: URI.open("https://grubhubby-seeds.s3.amazonaws.com/menu-images/m#{index + 1}.jpg"),
  filename: "m#{index + 1}.jpg"
  )
end 

  puts "WASNT THAT FUN..."





# MenuItem.each_with_index do |restaurant,index|
#   restaurant.img_url.attach(
#     # The string passed to URI.open should be the URL of the image in its bucket.
#     # This sample assumes the bucket name is `benchbnb-seeds`.
#     io: URI.open("https://grubhubby-seeds.s3.amazonaws.com/grub-images/rest/r#{restaurant.id}/r#{restaurant.id}#{index + 1}.jpg"),
#     filename: "restaurant_r#{index + 1}.jpg"
#   )
# end
