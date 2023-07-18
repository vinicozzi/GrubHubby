class RemoveRestImg < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :img_url
    remove_column :restaurants, :lng 
    remove_column :restaurants, :lat
  end
end
