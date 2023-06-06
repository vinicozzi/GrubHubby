# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  user_id       :bigint           not null
#  restaurant_id :bigint           not null
#  description   :text             not null
#  rating        :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :restaurant_id, :description, :rating, presence: true
    validates :description, length: { minimum: 50, message: "Review Is Too Long" }

    belongs_to :restaurant
    belongs_to :user 
end 
