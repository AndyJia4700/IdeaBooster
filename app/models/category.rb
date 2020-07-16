# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    validates :category_name, presence: true

    has_many :projects,
    foreign_key: :category_id,
    class_name: "Project"
end
