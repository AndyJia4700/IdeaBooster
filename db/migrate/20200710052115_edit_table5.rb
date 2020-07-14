class EditTable5 < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:rewards, :backer_id, nil)
  end
end
