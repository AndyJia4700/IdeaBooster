class EditTable1 < ActiveRecord::Migration[5.2]
  def change
    remove_index :projects, name: "index_projects_on_category_id", unique: true
    remove_index :projects, name: "index_projects_on_location_id", unique: true
  end
end
