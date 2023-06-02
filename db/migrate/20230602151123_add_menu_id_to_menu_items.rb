class AddMenuIdToMenuItems < ActiveRecord::Migration[7.0]
  def change
    add_reference :menu_items, :menu, foreign_key: true
  end
end
