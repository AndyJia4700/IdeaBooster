# == Schema Information
#
# Table name: rewards
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  description        :text
#  project_id         :integer          not null
#  pledge_amount      :integer          not null
#  reward_quantity    :integer          not null
#  shipping_option    :string
#  time_limit         :date
#  estimated_delivery :date
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  backer_id          :string           is an Array
#
require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
