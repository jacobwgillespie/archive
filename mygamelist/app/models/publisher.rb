class Publisher < ActiveRecord::Base

  include Authority::Abilities
  self.authorizer_name = 'PublisherAuthorizer'

  attr_accessible :name

  has_and_belongs_to_many :games
  attr_accessible :games, :game_ids

  extend FriendlyId
  friendly_id :name, use: :slugged
end
