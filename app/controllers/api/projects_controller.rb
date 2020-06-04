class Api::ProjectsController < ApplicationController
    before_action :ensure_logged_in, only:[:create, :update, :destroy]

    def index
        @projects = Project.all.includes(:creator)
        # render :index
    end

    def show
        @project = Project.find(params[:id])
    end

    def new
        @project = Project.new
    end

    def edit
        @project = Project.find(params[:id])
    end

    def create
        @project = Project.new(project_params)
        if @project.save
            render "api/projects/show"
            ##create show page for each project id
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        @project = Project.find_by(params[:id])
        if @project && @project.creator_id == current_user.id
            if @project.update_attributes(project_params)
                render "api/projects/show"

    end

    def destroy
    end

    def project_params
        params.require(:project).permit(:title, :subtitle, :creator_id, :category_id, :location_id, :funding_goal, :launch_date, :end_date )
    end
end
