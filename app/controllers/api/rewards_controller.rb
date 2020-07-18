class Api::RewardsController < ApplicationController
    # protect_from_forgery prepend: true, with: :exception
    before_action :ensure_logged_in, only:[:create, :update, :destroy]
    skip_before_action :verify_authenticity_token

    def index
        @rewards = Reward.all
        render :index
    end

    def show
        @reward = Reward.find(params[:id])
        render :show
    end

    def new
        @reward = Reward.new
    end

    def edit
        @reward = Reward.find(params[:id])
    end

    def create 
        @reward = Reward.new(reward_params)
        if @reward.save        
            render :show
        else
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @reward = Reward.find(params[:id])
        if @reward.update(reward_params)
            render :show
        else
            # debugger
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def destroy
        @reward = Reward.find(params[:id])
        if @reward && @reward.project_id == project.id
            @reward.destroy
            # render "api/rewards/show"
        end
    end

    private

    def reward_params
        params.require(:reward).permit(:backer_id, :title, :description, :project_id, :pledge_amount, :reward_quantity, :shipping_option, :time_limit, :estimated_delivery)
        # params.permit(:backer_id, :title, :description, :project_id, :pledge_amount, :reward_quantity, :shipping_option, :time_limit, :estimated_delivery)
    end
end