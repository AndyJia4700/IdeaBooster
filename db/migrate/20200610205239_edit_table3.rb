class EditTable3 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :rewards, :description, true
    change_column_null :rewards, :shipping_option, true
    change_column_null :rewards, :time_limit, true
    change_column_null :rewards, :estimated_delivery, true
  end
end
