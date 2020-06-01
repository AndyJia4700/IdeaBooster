class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :subtitle, null: false
      t.integer :creator_id, null: false
      t.integer :category_id, null: false
      t.integer :location_id, null: false
      t.integer :funding_goal, null: false
      t.date :launch_date
      t.date :end_date
      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :creator_id, unique: true
    add_index :projects, :category_id, unique: true
    add_index :projects, :location_id, unique: true
  end
end
