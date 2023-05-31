# == Schema Information
#
# Table name: restaurants
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  address        :string           not null
#  description    :text             not null
#  hours          :string           not null
#  rating         :decimal(, )      not null
#  review_count   :integer          not null
#  pricing_rating :string
#  menu_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Restaurant < ApplicationRecord

    validates :name, :description, :address, :hours, :rating, :review_count, presence: true 

    has_many :menu_items,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :MenuItem

    has_many :reviews,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Review

end
