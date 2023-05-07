class PatientPhysician < ActiveRecord::Base
  belongs_to :patient
  belongs_to :physician
end
