class EditTable7 < ActiveRecord::Migration[5.2]
  def change
    change_column :rewards, :backer_id, :string, array: true, default: []
  end
end
