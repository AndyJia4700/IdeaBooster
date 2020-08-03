class EditTable11 < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:rewards, :total_fund, 0)
    change_column_default(:rewards, :total_backer, 0)
  end
end
