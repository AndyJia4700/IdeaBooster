class EditTable8 < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :category_name, :string
    add_column :locations, :location, :string

  end
end
