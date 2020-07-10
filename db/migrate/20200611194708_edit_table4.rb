class EditTable4 < ActiveRecord::Migration[5.2]
  def change
    add_column :rewards, :backer_id, :string, array: true, default: []
  end
end
