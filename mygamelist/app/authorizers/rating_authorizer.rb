class RatingAuthorizer < ApplicationAuthorizer

  # Users can view all ratings
  def self.readable_by?(user)
    true
  end

  # Users can create ratings
  def self.creatable_by?(user)
    true
  end

  # Users can edit ratings
  def self.updatable_by?(user)
    true
  end

  # Users can delete ratings
  def self.deletable_by?(user)
    true
  end

  # Users can only edit their own ratings unless they are admins
  def updatable_by?(user)
    user.has_role?(:admin) or resource.user_id == user.id
  end

  # Users can only delete their own ratings unless they are admins
  def deletable_by?(user)
    user.has_role?(:admin) or resource.user_id == user.id
  end

  # Users cannot do anything else
  def self.default(able, user)
    false
  end

end