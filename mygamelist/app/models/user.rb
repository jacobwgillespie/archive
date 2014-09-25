class User < ActiveRecord::Base

  # TODO: whitelist
  has_paper_trail :only => [:username, :name, :email, :bio, :bio_raw, :slug, :avatar]

  # TODO: do we need this?
  include Authority::UserAbilities
  include Authority::Abilities
  self.authorizer_name = 'UserAuthorizer'

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => [:login]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :username, :email, :password, :password_confirmation, :remember_me

  # attr_accessible :title, :body

  acts_as_voter
  # track submitted rating karma
  has_karma(:ratings, :as => :user, :weight => 1.0)
  def reviews
    self.ratings.has_review
  end

  attr_accessor :login
  attr_accessible :login
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if reset_password_token = conditions[:reset_password_token]
      where(conditions).where(["reset_password_token = ?", reset_password_token]).first
    else
      login = conditions.delete(:login).downcase
      where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    end
  end

  has_many :relations

  def listed_games(list)
    list = List.preset(list)
    if list
      Game.joins(:relations).where('relations.user_id' => id, 'relations.list_id' => list.id)
    else
      []
    end
  end

  def listed_games_relations(list)
    list = List.preset(list)
    if list
      Relation.where('user_id' => id, 'list_id' => list.id).includes(:game)
    else
      []
    end
  end

  def add_role!(role)
    self.role = role.to_s.downcase
    self.save
  end

  def has_role?(role)
    self.role == role.to_s.downcase
  end

  extend FriendlyId
  friendly_id :username, use: :slugged

  def to_s
    name
  end

  def add_game_to_list!(game, list)
    list = List.find_or_create_by_name!(list)
    self.relations.where(:game_id => game.id).where(:list_id => list.id).first_or_create!
  end

  def remove_game_from_list!(game, list)
    list = List.find_by_name(list)
    self.relations.where(:game_id => game.id).where(:list_id => list.id).destroy_all
  end

  def get_rating(game_id)
    self.ratings.where(:game_id => game_id)
  end
  def rate_game!(rating)
    r = get_rating(rating.game_id).first_or_create!
    r.update_attributes!(:value => rating.value, :review_raw => rating.review_raw)
  end


  attr_accessible :bio_raw, :name, :user, :user_id, :avatar, :avatar_cache, :remote_avatar_url
  attr_protected :bio
  mount_uploader :avatar, AvatarUploader

  has_many :ratings
  has_many :rated_games, :through => :ratings, :source => :games
  attr_accessible :ratings, :rated_games

  before_save :process_bio, :if => Proc.new { self.bio_raw_changed? }
  def process_bio
    self.bio = self.bio_raw
    #text = Sanitize.clean(self.bio_raw, Sanitize::Config::RELAXED)
    #self.bio = RDiscount.new(text, :smart).to_html
  end

end
