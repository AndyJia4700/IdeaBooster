class EditTable9 < ActiveRecord::Migration[5.2]
  def change
    add_column :rewards, :total_fund, :integer
  end
end
