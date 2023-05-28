# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  address         :string
#  phone_number    :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  current_order   :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :first_name, :last_name, :email, :phone_number, :password_digest, :session_token, presence: true 

    validates :email, :phone_number, :session_token, uniqueness: true

    validates :password, 
    length: { minimum: 6, message: "Invalid Password" }, allow_nil: true

    validates :email, length: { in: 3..100 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP, message: "Invalid email" }

    validates :phone_number, 
    format: { with: /\A\d{10}\z/, message: "should be a 10-digit number" }

    attr_reader :password 

    before_validation :ensure_session_token

        def self.find_by_credentials(credential, password)
            field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :phone_number
            user = User.find_by(field => credential)
            user&.authenticate(password)
        end

        def password=(password)
            @password = password
            self.password_digest = BCrypt::Password.create(password)
        end
        
        def is_password?(password)
            BCrypt::Password.new(self.password_digest).is_password?(password)
        end

        def reset_session_token!
            self.update!(session_token: generate_unique_session_token)
            self.session_token
        end


        private

        def generate_unique_session_token
            loop do
            token = SecureRandom.base64
            break token unless User.exists?(session_token: token)
            end
        end

        def ensure_session_token
            self.session_token ||= generate_unique_session_token
        end


end
