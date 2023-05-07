

class Dog
  def initialize(name)
    @name = name
  end

  attr_accessor :name, :age, :breed

  def walk
    # do something
    puts @age
  end

  def self.walk(dogs)
    dogs.each do |dog|
      dog.walk
    end
  end
end


my_dog1 = Dog.new("Lassie")
my_dog2 = Dog.new("Lassie")
my_dog3 = Dog.new("Lassie")

Dog.walk([my_dog1, my_dog2])
