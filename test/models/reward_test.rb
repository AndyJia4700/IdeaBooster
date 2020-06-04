# == Schema Information
#
# Table name: rewards
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  description        :text             not null
#  project_id         :integer          not null
#  pledge_amount      :integer          not null
#  reward_quantity    :integer          not null
#  shipping_option    :string           not null
#  time_limit         :date             not null
#  estimated_delivery :date             not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
