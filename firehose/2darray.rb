
class Image
  def initialize(array)
    @array = array
  end

  def print_image
    @array.each do |inner_array|
      inner_array.each do |element|
        print element
        print "hello"
      end
      puts "end of row"
    end
  end
end

image = Image.new([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3]
])

image.print_image
