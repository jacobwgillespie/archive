class GameAuthorizer < ApplicationAuthorizer

  # Users can view all games
  def self.readable_by?(user)
    true
  end

  # Users can create games if they are admins or editors
  def self.creatable_by?(user)
    user.has_role? :admin or user.has_role? :editor
  end

  # Users can update games if they are admins or editors
  def self.updatable_by?(user)
    user.has_role?(:admin) or user.has_role?(:editor)
  end

  # Users can delete games if they are admins
  def self.deletable_by?(user)
    user.has_role?(:admin)
  end

  # Users can only edit unlocked games unless they are admins
  def updatable_by?(user)
    !resource.locked?
  end

  # Users cannot do anything else
  def self.default(able, user)
    false
  end

end