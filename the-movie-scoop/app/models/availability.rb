class Availability < ActiveRecord::Base
  belongs_to :movie

  scope :purchase, -> { where(kind: 'purchase') }
  scope :streaming, -> { where(kind: 'streaming') }
  scope :dvd, -> { where(kind: 'dvd') }
  scope :rental, -> { where(kind: 'rental') }
end
