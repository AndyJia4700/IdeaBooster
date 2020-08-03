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
require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
