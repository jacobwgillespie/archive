class Rating < ActiveRecord::Base

  include Authority::Abilities
  self.authorizer_name = 'RatingAuthorizer'

  attr_accessible :game_id, :user_id, :value, :review_raw
  attr_protected :review
  belongs_to :user
  belongs_to :game

  scope :has_review, where('review_raw IS NOT NULL AND LENGTH(review_raw) > 0')

  before_save :process_review, :if => Proc.new { self.review_raw_changed? }
  def process_review
    self.review = self.review_raw
    #text = Sanitize.clean(self.review_raw, Sanitize::Config::RELAXED)
    #self.review = RDiscount.new(text, :smart).to_html
  end

  acts_as_voteable
end
