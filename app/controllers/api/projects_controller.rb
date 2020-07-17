class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only:[:create, :update, :destroy]
    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception
    def index
        @projects = Project.all.includes(:creator)
        render :index
    end

    def show
        @project = Project.find(params[:id])
        render :show
    end

    def new
        @project = Project.new
    end

    def edit
        @project = Project.find(params[:id])
    end

    def create
        @project = Project.new(project_params)
        @project.creator_id = current_user.id
        if @project.save
            # debugger
            render :show
        else
            # debugger
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        
        @project = Project.find(params[:project][:id])
        # debugger
        if @project && @project.creator_id == current_user.id
            # debugger
            if @project.update(project_params)
                # debugger
                render :show
            else
                render json: @project.errors.full_messages, status: 422
            end
        end
    end

    def destroy

        @project = Project.find(params[:id])
        if @project && @project.creator_id == current_user.id
            @project.destroy
        end
    end

    private

    def project_params
        params.require(:project).permit(:title, :subtitle, :category_id, :location_id, :funding_goal, :launch_date, :end_date, :picture)
        # params.require(:project).permit(:title, :subtitle, :category_id, :location_id, :funding_goal)
    end
end
