class Physician < ActiveRecord::Base
  belongs_to :user
  has_many :patients, inverse_of: :primary_physician
  has_many :patient_physicians
  has_many :authorized_patients, class_name: 'Patient', through: :patient_physicians, source: :patient
  has_many :records

  def full_name
    "#{first_name} #{last_name}"
  end

  def all_patients
    [patients, authorized_patients].flatten.compact
  end

  def all_records
    [records, authorized_patients.map(&:records)].flatten.compact
  end
end
