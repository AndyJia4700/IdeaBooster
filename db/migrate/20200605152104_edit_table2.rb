class EditTable2 < ActiveRecord::Migration[5.2]
  def change
      remove_index :projects, name: "index_projects_on_creator_id", unique: true
  end
end
