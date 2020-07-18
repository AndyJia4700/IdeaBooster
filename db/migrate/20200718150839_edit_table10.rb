class EditTable10 < ActiveRecord::Migration[5.2]
  def change
    add_column :rewards, :total_backer, :integer
  end
end
