class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only:[:create, :update, :destroy]

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
        # debugger
        @project = Project.new(project_params)
        @project.creator_id = current_user.id
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        
        @project = Project.find(params[:project][:id])
        if @project && @project.creator_id == current_user.id
            if @project.update(project_params)
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
    end
end
