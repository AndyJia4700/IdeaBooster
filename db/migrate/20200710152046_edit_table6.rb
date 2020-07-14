class EditTable6 < ActiveRecord::Migration[5.2]
  def change
    change_column :rewards, :backer_id, :text, array: true, default: []
  end
end
