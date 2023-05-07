
def a_method
  # ...
end

class Animal



  def initialize(age)
    @age = age
  end

  def age
    @age
  end

  def speak
    'sound'
  end

  def do_something
    puts self.age
    puts speak
  end

end

an_animal = Animal.new(1)
a_method
