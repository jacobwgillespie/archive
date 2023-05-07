class Image
  def initialize(array)
    @array = array
  end

  def output_image
    @array.each do |value|
      puts value.join(' ')
    end
  end

  def blur(distance)
    @new_array = @array.map { |row| row.dup }
    @new_array.each_with_index do |row, row_number|
      row.each_with_index do |cell, column_number|
        blur_coordinate(row_number, column_number, distance) if cell == 1
      end
    end
  end

  private

  def is_valid_coordinates?(row_number, column_number)
    return false if row_number >= @array.length
    return false if column_number >= @array[row_number].length
    return true
  end

  def calculate_manhattan_distance(row_number1, column_number1, row_number2, column_number2)
    (row_number1 - row_number2).abs + (column_number1 - column_number2).abs
  end

  # Blur up to distance at row and column
  def blur_coordinate(row_number, column_number, distance)
    @array.each_with_index do |row, other_row_number|
      row.each_with_index do |cell, other_column_number|
        manhattan_distance = calculate_manhattan_distance(
          row_number,
          column_number,
          other_row_number,
          other_column_number
        )

        should_we_blur_it = manhattan_distance <= distance

        if should_we_blur_it == true
          @array[other_row_number][other_column_number] = 1
        end
      end
    end

    # (1..distance).each do |delta_row|
    #   (1..distance).each do |delta_col|
    #     #right
    #     manhattan_distance = calculate_manhattan_distance(row_number, column_number, row_number + delta_row, column_number + delta_col)
    #     if manhattan_distance <= distance == true
    #       @array[row_number + delta_row][column_number + delta_col] = 1
    #     end
    #
    #     #up
    #     manhattan_distance = calculate_manhattan_distance(row_number, column_number, row_number - delta_row, column_number + delta_col)
    #     if manhattan_distance <= distance == true
    #       @array[row_number - delta_row][column_number + delta_col] = 1
    #     end
    #
    #     manhattan_distance = calculate_manhattan_distance(row_number, column_number, row_number - delta_row, column_number - delta_col)
    #     if manhattan_distance <= distance == true
    #       @array[row_number - delta_row][column_number - delta_col] = 1
    #     end
    #
    #     manhattan_distance = calculate_manhattan_distance(row_number, column_number, row_number + delta_row, column_number - delta_col)
    #     if manhattan_distance <= distance == true
    #       @array[row_number + delta_row][column_number - delta_col] = 1
    #     end
    #   end
    # end
  end

end

image = Image.new([
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
])
image.blur(1)
image.output_image
