class Image

  def initialize(array)
    @array = array
  end

  def output_image
    @array.each do |value|
      puts value.join
    end
  end

  def blur
    @new_array = @array.dup.map { |row| row.dup }
    @new_array.each_with_index do |x,ind|
      x.each_with_index do |y,index|
        if y == 1
          #above
          if @new_array[ind - 1][index] == 0
            @array[ind - 1][index] = 1
          end
          #left
          if @new_array[ind][index - 1] == 0
            @array[ind][index - 1] = 1
          end
          #right
          if @new_array[ind][index + 1] == 0
            @array[ind][index + 1] = 1
          end
        end

        #0 10 0
        #1111
        #0 0 11
        #0 001
        #@array[ind -1][index] = 1
        #@array[ind][index + 1] = 1
        #@array[ind + 1][index] = 1
        #end
      end
    end
  end
end

image = Image.new([
  [0,0,0,0],
  [0,1,0,0],
  [0,0,0,1],
  [0,0,0,0]
  ])
  image.blur
  image.output_image
