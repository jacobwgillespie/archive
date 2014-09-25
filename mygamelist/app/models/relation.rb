class Relation < ActiveRecord::Base

  include Authority::Abilities
  self.authorizer_name = 'RelationAuthorizer'

  attr_accessible :game_id, :list, :list_id, :user_id, :user, :list_order_position
  belongs_to :game
  belongs_to :user
  belongs_to :list

  include RankedModel
  ranks :list_order, :with_same => [:list_id, :user_id]

  # for transfering button messages around
  attr_accessor :add_message, :remove_message
  attr_accessible :add_message, :remove_message
end
