# @projects.each do |project|
#     json.set! project.id do
#         json.partial! 'project', project: project
#     end
# end


@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :subtitle, :category_id, :location_id, :funding_goal, :launch_date, :end_date, :picture
        json.pictureUrl url_for(project.picture)
    end
end

