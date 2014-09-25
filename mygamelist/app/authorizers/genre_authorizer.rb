class GenreAuthorizer < ApplicationAuthorizer

  # Users can view all genres
  def self.readable_by?(user)
    true
  end

  # Users can create genres if they are admins
  def self.creatable_by?(user)
    user.has_role?(:admin)
  end

  # Users can edit genres if they are admins
  def self.updatable_by?(user)
    user.has_role?(:admin)
  end

  # Users can delete genres if they are admins
  def self.deletable_by?(user)
    user.has_role?(:admin)
  end

  # Users cannot do anything else
  def self.default(able, user)
    false
  end

end