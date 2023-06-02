class ChangeMigrationItemTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :menu_items, :menu_id 
    add_column :menu_items, :restaurant_id, :integer 
    add_column :menu_items, :img_url, :string
  end
end
