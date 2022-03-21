class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessor :login

  has_many :lists

  validates :username,
            presence: true,
            uniqueness: {
              case_sensitive: false
            }

  def username=(val)
    super(val.downcase)
    self.display_username = val
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_h).where([
        'lower(username) = :value OR lower(email) = :value',
        { value: login.downcase }
      ]).first
    else
      where(conditions.to_h).first
    end
  end

  def likes?(movie)
    MovieLike.where(user: self, movie: movie).exists?
  end

  def seen?(movie)
    MovieSeen.where(user: self, movie: movie).exists?
  end

  def in_watchlist?(movie)
    WatchlistMovie.where(user: self, movie: movie).exists?
  end
end
