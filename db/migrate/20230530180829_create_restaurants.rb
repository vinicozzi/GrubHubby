class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false 
      t.string :address, null: false 
      t.text :description, null: false 
      t.string :hours, null: false 
      t.decimal :rating, null: false 
      t.integer :review_count, null: false 
      t.string :pricing_rating
      t.integer :menu_id 

      t.timestamps
    end

    add_index :restaurants, :menu_id 
    add_index :restaurants, :name 
    add_index :restaurants, :address
  end
end 
