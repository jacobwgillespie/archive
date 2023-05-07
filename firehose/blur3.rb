class Image
  attr_accessor :arr

  def initialize(arr)
    @arr = arr
  end

  def output_image(arr=@arr)
    arr.each do |x|
      x.each do |y|
        print y
      end
      puts
    end
  end

  def inside_matrix?(x, y)
    x >= 0 && x <= @arr.size && y >= 0 && y <= @arr.first.size - 1
  end

  def manhattan(x1,y1,x2,y2)
    (x1 - x2).abs + (y1 - y2).abs
  end

  def blur(num)
    new_array = Array.new
    @arr.each{|i|new_array<<i.dup}

    @arr.each_with_index do |row, rowIndex|
      row.each_with_index do |col, colIndex|
        if (@arr[rowIndex][colIndex] > 0)
          (0..num).each do |n|
            (0..num).each do |m|
              puts "n #{n} m #{m}"

              if inside_matrix?(rowIndex + n, colIndex + m) && manhattan(rowIndex, colIndex, rowIndex + n, colIndex + m) <= num
                new_array[rowIndex + n][colIndex + m] = 1
              end

              if inside_matrix?(rowIndex - n, colIndex - m) && manhattan(rowIndex, colIndex, rowIndex - n, colIndex - m) <= num
                new_array[rowIndex - n][colIndex - m] = 1
              end

              if inside_matrix?(rowIndex + n, colIndex - m) && manhattan(rowIndex, colIndex, rowIndex + n, colIndex - m) <= num
                new_array[rowIndex + n][colIndex - m] = 1
              end

              if inside_matrix?(rowIndex - n, colIndex + m) && manhattan(rowIndex, colIndex, rowIndex - n, colIndex + m) <= num
                new_array[rowIndex - n][colIndex + m] = 1
              end

              # if inside_matrix?(rowIndex, colIndex + n) && manhattan(rowIndex, colIndex, rowIndex, colIndex + n) <= num
              #   new_array[rowIndex][colIndex + n] = 1
              # end
              # if inside_matrix?(rowIndex, colIndex - n) && manhattan(rowIndex, colIndex, rowIndex, colIndex - n) <= num
              #   new_array[rowIndex][colIndex - n] = 1
              # end
              # if inside_matrix?(rowIndex - n, colIndex) && manhattan(rowIndex, colIndex, rowIndex - n, colIndex) <= num
              #   new_array[rowIndex - n][colIndex] = 1
              # end
              # if inside_matrix?(rowIndex + n, colIndex) && manhattan(rowIndex, colIndex, rowIndex + n, colIndex) <= num
              #   new_array[rowIndex + n][colIndex] = 1
              # end
            end
          end
        end
      end
    end
    @arr = new_array
  end
end

image = Image.new([
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
])

image.blur(3)
image.output_image
