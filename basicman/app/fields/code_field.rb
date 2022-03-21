require 'administrate/field/base'

class CodeField < Administrate::Field::Base
  def to_s
    data
  end
end
