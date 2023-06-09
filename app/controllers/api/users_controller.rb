class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password', 'first_name', 'last_name', 'email', 'phone_number']

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :address, :email, :phone_number, :password)
  end

end
