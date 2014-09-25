class Game < ActiveRecord::Base

  has_paper_trail

  include Authority::Abilities
  self.authorizer_name = 'GameAuthorizer'

  attr_accessible :description_raw, :name, :poster, :poster, :poster_cache, :remote_poster_url
  attr_protected :description
  mount_uploader :poster, PosterUploader

  before_save :process_description, :if => Proc.new { self.description_raw_changed? }
  def process_description
    self.description = self.description_raw
    #text = Sanitize.clean(self.description_raw, Sanitize::Config::RELAXED)
    #self.description = RDiscount.new(text, :smart).to_html
  end

  def locked?
    false
  end

  has_many :ratings
  has_many :raters, :through => :ratings, :source => :users
  attr_accessible :ratings, :raters

  has_and_belongs_to_many :genres
  attr_accessible :genres, :genre_ids

  has_and_belongs_to_many :publishers
  attr_accessible :publishers, :publisher_ids

  attr_accessible :release_date

  has_many :relations

  def in_list?(user, list)
    (list) ? !self.relations.where(:user_id => user.id).where(:list_id => list.id).empty? : false
  end

  def average_rating
    return 0 unless self.ratings.size > 0
    @value = 0
    self.ratings.each do |rating|
      @value = @value + rating.value
    end
    @total = self.ratings.size
    @value.to_f / @total.to_f
  end

  extend FriendlyId
  friendly_id :name, use: :slugged

end
