class Dare < ActiveRecord::Base
  attr_accessible :day, :devotion, :title

  has_many :completions
  has_many :users, :through => :completions

  default_scope -> { order(:day) }

  acts_as_list :column => 'day'

  def next_dare
    lower_item || self
  end

  def previous_dare_id
    higher_item.try(:id) || ''
  end

  def devotion_formatted
    pipeline = HTML::Pipeline.new [
      HTML::Pipeline::MarkdownFilter
    ]

    pipeline.call(self.devotion)[:output].html_safe
  end

  def to_param
    self.day
  end

  def self.find(day)
    self.where(day: day).first
  end
end
