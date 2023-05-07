class Something
  attr_accessor :field, :second_field

  def initialize(field, second_field)
    @field = field
  end

  def field
    return @field
  end

  def field=(new_val)
    @field = new_val
  end
end

something = Something.new
something.field = 321
puts something.field

# puts something.field
