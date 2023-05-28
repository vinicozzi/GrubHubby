json.user do
    json.extract! @user, :id, :first_name, :last_name, :email, :address, 
    :phone_number, :current_order, :created_at, :updated_at
end