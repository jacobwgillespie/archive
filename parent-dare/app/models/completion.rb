class Completion < ActiveRecord::Base
  attr_accessible :dare_id, :user_id

  belongs_to :dare
  belongs_to :user

  def created_at
    self.read_attribute(:created_at).try(:localtime)
  end

end
