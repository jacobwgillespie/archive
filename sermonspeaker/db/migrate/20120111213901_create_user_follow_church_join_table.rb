class CreateUserFollowChurchJoinTable < ActiveRecord::Migration
  def change
    create_table :churches_users, :id => false do |t|
      t.references :church
      t.references :user
    end
  end
end
