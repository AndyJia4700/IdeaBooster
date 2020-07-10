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
        # debugger;
        @reward = Reward.new(reward_params)
        # debugger;
        if @reward.save        
            render :show
        else
            # debugger;
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def update
        # debugger;
        # @reward = Reward.find_by(project_id: rewards[:project_id])
        @reward = Reward.find_by(project_id: project_id)
        # debugger
        if @reward.update(reward_params)
            render :show
        else
            # debugger
            render json: @reward.errors.full_messages, status: 422
        end
    end

    def destroy
        @reward = reward.find(params[:id])
        if @reward && @reward.project_id == project.id
            @reward.destroy
            # render "api/rewards/show"
        end
    end

    private

    def reward_params
        params.require(:reward).permit(:title, :description, :project_id, :pledge_amount, :reward_quantity, :shipping_option, :time_limit, :estimated_delivery, :backer_id)
    end
end