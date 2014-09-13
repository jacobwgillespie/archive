class User < ActiveRecord::Base
  attr_protected :provider, :uid, :name, :email

  attr_accessible :dare_id

  has_many :completions
  has_many :completed_dares, :through => :completions, :source => :dare

  belongs_to :dare

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
      if auth['info']
         user.name = auth['info']['name'] || ""
         user.email = auth['info']['email'] || ""
      end
    end
  end

  def participating?
    self.start_date?
  end

  def current_dare
    self.dare || Dare.first
  end

  def completion_for(dare)
    Completion.where(dare_id: dare.id, user_id: self.id).first_or_initialize
  end

  def complete!(next_dare)
    if self.dare.nil? or self.dare.day < next_dare.day
      self.dare = next_dare
      self.last_complete_date = Date.today
      self.save!
    else
      false
    end
  end

  def reset_dares!
    self.completions.destroy_all
    self.dare = nil
    self.save!
  end

  def completed?(dare)
    false
  end

end
