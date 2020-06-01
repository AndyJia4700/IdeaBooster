class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :project_id, null: false
      t.integer :pledge_amount, null: false
      t.integer :reward_quantity, null: false
      t.string :shipping_option, null: false
      t.date :time_limit, null: false
      t.date :estimated_delivery, null: false
      t.timestamps
      t.timestamps
    end
    add_index :rewards, :project_id, unique: true
  end
end
