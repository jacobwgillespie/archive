class ListAuthorizer < ApplicationAuthorizer

  # Users can view all lists
  def self.readable_by?(user)
    true
  end

  # Users cannot create any lists
  def self.creatable_by?(user)
    false
  end

  # Users cannot edit any lists
  def self.updatable_by?(user)
    false
  end

  # Users cannot delete any lists
  def self.deletable_by?(user)
    false
  end

  # Users cannot do anything else
  def self.default(able, user)
    false
  end

end