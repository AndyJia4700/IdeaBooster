@rewards.each do |reward|
    json.set! reward.id do
        json.extract! reward, :id, :title, :description, :project_id, :pledge_amount, :reward_quantity, :shipping_option, :time_limit, :estimated_delivery
    end
end