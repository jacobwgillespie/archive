class UserAuthorizer < ApplicationAuthorizer

  # Users can view all other user profiles
  def self.readable_by?(user)
    true
  end

  # Users cannot create any users
  def self.creatable_by?(user)
    false
  end

  # Users can edit users
  def self.updatable_by?(user)
    true
  end

  # Users cannot delete any users
  def self.deletable_by?(user)
    false
  end

  # Users can only edit their own profiles
  def updatable_by?(user)
    resource == user
  end

  # Users cannot do anything else
  def self.default(able, user)
    false
  end

end