json.extract! project, :id, :title, :subtitle, :creator_id, :category_id, :location_id, :funding_goal, :launch_date, :end_date

# if project.picture.attached?
    json.pictureUrl url_for(project.picture)
# end