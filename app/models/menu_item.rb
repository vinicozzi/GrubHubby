# == Schema Information
#
# Table name: menu_items
#
#  id            :bigint           not null, primary key
#  item_name     :string           not null
#  item_price    :decimal(, )      not null
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer
#
class MenuItem < ApplicationRecord

    validates :item_name, presence: true, length: {maximum: 50}
    validates :item_price, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :restaurant_id, presence: true  
    
    belongs_to :restaurant 

    has_one_attached :photo 

end
