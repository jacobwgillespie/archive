class RelationAuthorizer < ApplicationAuthorizer

  # Users can view all relations
  def self.readable_by?(user)
    true
  end

  # Users can create relations
  def self.creatable_by?(user)
    true
  end

  # Users can edit relations
  def self.updatable_by?(user)
    true
  end

  # Users can delete relations
  def self.deletable_by?(user)
    true
  end

  # Users can only edit their own relations
  def updatable_by?(user)
    resource.user_id == user.id
  end

  # Users can only delete their own relations
  def deletable_by?(user)
    resource.user_id == user.id
  end

  # Users cannot do anything else
  def self.default(able, user)
    false
  end

end