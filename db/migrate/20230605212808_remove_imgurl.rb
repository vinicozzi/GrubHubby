class RemoveImgurl < ActiveRecord::Migration[7.0]
  def change
    remove_column :menu_items, :img_url 
  end
end
