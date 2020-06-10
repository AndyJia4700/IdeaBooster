# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  subtitle     :text             not null
#  creator_id   :integer          not null
#  category_id  :integer          not null
#  location_id  :integer          not null
#  funding_goal :integer          not null
#  launch_date  :date
#  end_date     :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Project < ApplicationRecord
    validates :title, :subtitle, presence: true, uniqueness: true
    validates :funding_goal, presence: true

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: "User"

    has_one :reward,
    foreign_key: :project_id,
    class_name: "Reward"
    
    has_one_attached :picture
    def ensure_picture
        unless self.picture.attached?
            errors[:picture] << 'a picture must be attached'
        end
    end

end
