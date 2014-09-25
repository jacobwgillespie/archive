class List < ActiveRecord::Base

  include Authority::Abilities
  self.authorizer_name = 'ListAuthorizer'

  attr_accessible :name
  has_many :relations

  validates :name, :inclusion => { :in => %w(played wanted favorite),
            :message => "%{value} is not valid for a list" }

  def self.preset(name)
    self.find_or_create_by_name!(name.downcase.to_s)
  end

  extend FriendlyId
  friendly_id :name, use: :slugged
end
