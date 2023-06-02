class AddRestaurantKeyToMenuItems < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :menu_items, :restaurants
  end
end
