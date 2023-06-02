# == Schema Information
#
# Table name: menus
#
#  id              :bigint           not null, primary key
#  restaurant_id   :integer          not null
#  restaurant_name :string           not null
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Menu < ApplicationRecord

    validates :restaurant_name, presence: true, length: { maximum: 50 }
    validates :description, presence: true

    belongs_to :restaurant 
    has_many :menu_items 

end
