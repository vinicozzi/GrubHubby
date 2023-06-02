class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus do |t|
      t.integer :restaurant_id, null: false 
      t.string :restaurant_name, null: false 
      t.text :description, null: false 

      t.timestamps
    end

    add_index :menus, :restaurant_id
  end
end
