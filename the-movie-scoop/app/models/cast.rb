class Cast < ActiveRecord::Base
  belongs_to :movie
  belongs_to :person

  default_scope -> { order(order: :asc) }
end
