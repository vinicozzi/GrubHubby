json.user do
    json.extract! @user, :id, :first_name, :last_name, :address, :email, :phone_number, :created_at, :updated_at
    # json.user_photo url_for(@user.photo) if @user.photo.present? # without this it will error when a new user trys to sign up.
end