class RemoveMenuId < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :menu_id
  end
end
