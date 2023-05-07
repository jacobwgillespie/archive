class Patient < ActiveRecord::Base
  belongs_to :user
  belongs_to :primary_physician, class_name: 'Physician', foreign_key: :physician_id
  has_many :records
end
