class AddKindToAvailability < ActiveRecord::Migration
  def change
    add_column :availabilities, :kind, :string
    add_index :availabilities, :kind
  end
end
