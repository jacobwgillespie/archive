class AddUserToPhysician < ActiveRecord::Migration
  def change
    add_reference :physicians, :user, index: true, foreign_key: true
  end
end
