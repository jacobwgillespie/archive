class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :patient
  has_one :physician

  def user_type
    return :patient unless patient.nil?
    return :physician unless physician.nil?
    :none
  end


  def patients
    if user_type == :physician
      physician.all_patients
    else
      []
    end
  end

  def visits
    if user_type == :physician
      physician.all_records
    elsif user_type == :patient
      patient.records
    else
      []
    end
  end
end
