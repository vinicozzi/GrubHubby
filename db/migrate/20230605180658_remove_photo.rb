class RemovePhoto < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :photo 
  end
end
