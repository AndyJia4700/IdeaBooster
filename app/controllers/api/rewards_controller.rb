class Api::RewardsController < ApplicationController
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
        @reward.project_id = project.id
        if @reward.save        
            render :show
        else
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def update
        @reward = Reward.find_by(params[:id])
        if @reward && @reward.project_id == project_id
            if @reward.update(reward_params)
                render "api/rewards/show"
            else
                render json: @reward.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        @reward = reward.find_by(params[:id])
        if @reward && @reward.project_id == project.id
            @reward.destroy
            # render "api/rewards/show"
        end
    end

    private

    def reward_params
        params.require(:reward).permit(:title, :description, :project_id, :pledge_amount, :reward_quantity, :shipping_option, :time_limit, :estimated_delivery)
    end
end