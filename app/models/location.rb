# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
    validates :location, presence: true

    # has_many :projects,
    # foreign_key: :location_id,
    # class_name: "Project"
end
