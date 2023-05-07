json.id user.id
json.type user.user_type

if user.user_type == :patient
  json.partial! 'patients/patient', locals: { patient: user.patient }
end

if user.user_type == :physician
  json.partial! 'physicians/physician', locals: { physician: user.physician }
end
