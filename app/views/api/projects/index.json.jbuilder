@projects.each do |project|
    json.set! project.id do
        json.partial! 'project', project: project
    end
end


# json.array! @projects do |project|
#     json.extract! project, :id, :title, :subtitle, :category_id, :location_id, :funding_goal, :launch_date, :end_date, :pictureUrl
#     json.pictureUrl url_for(project.picture)
# end

