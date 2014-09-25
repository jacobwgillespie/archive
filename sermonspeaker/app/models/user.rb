class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :name

  # Protected attribute :role

  # Class accessor for doing User.current outside of controllers
  cattr_accessor :current

  belongs_to :church
  has_many :followings
  has_many :followed_churches, :through => :followings, :source => :entity, :source_type => :Church
  has_many :followed_speakers, :through => :followings, :source => :entity, :source_type => :Speaker

  def followed_churches_ids
    @followed_churches_ids ||= self.followed_churches.pluck '"churches"."id"'
  end

  def standalone_speakers_ids
    @standalone_speakers_ids ||= self.followed_speakers.where('"speakers"."church_id" NOT IN (?)', followed_churches_ids).pluck '"speakers"."id"'
  end

  def followed_sermons
    @followed_sermons ||= Sermon.where('church_id IN (?) OR speaker_id IN (?)', followed_churches_ids, standalone_speakers_ids)
  end

  def church?
    !self.church.nil?
  end

  def follow! entity
    self.followings.find_or_create_by_entity_id_and_entity_type(entity.id, entity.class.to_s)
  end

  def unfollow! entity
    following = self.followings.where(:entity_id => entity.id, :entity_type => entity.class.to_s).first
    following.destroy unless following.nil?
  end

  def following? entity
    !self.followings.where(:entity_id => entity.id, :entity_type => entity.class.to_s).first.nil?
  end

  def has_followings?
    self.followings.size > 0
  end

  after_initialize :field_defaults
  def field_defaults
    self.role ||= 'User'
  end


  def make_admin switch
    self.role = switch ? 'Admin' : 'User'
  end

  def is?(role)
      self.role == role.to_s.camelize
  end

  def manages_a_church?
    not self.church.nil?
  end

  def ability
    @ability ||= Ability.new(self)
  end
  delegate :can?, :cannot?, :to => :ability

  def managed_speakers
    manages_a_church? ? church.speakers : []
  end

  def managed_churches
    [self.church]
  end

end
