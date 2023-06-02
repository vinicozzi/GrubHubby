class CreateMenuItems < ActiveRecord::Migration[7.0]
  def change
    create_table :menu_items do |t|
      t.string :item_name, null: false 
      t.decimal :item_price, null: false 
      t.integer :menu_id, null: false
      t.text :description

      t.timestamps
    end

    add_index :menu_items, :menu_id
  end
end
