class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.bigint :user_id, null: false
      t.bigint :restaurant_id, null: false
      t.text :description, null: false
      t.string :rating, null: false

      t.timestamps
    end

    add_foreign_key :reviews, :users
    add_foreign_key :reviews, :restaurants
  end
end