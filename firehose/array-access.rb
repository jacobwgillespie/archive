



img = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0]
]

img.each_with_index do |row, row_idx|
  row.each_with_index do |cell, col_idx|
    img[row_idx - 1][col_idx] = 1
  end
end

array.each_with_index do |i, idx|
  if i == 1
    array[idx - 1] = 1
    array[idx + 1] = 1
  end
end




 #=> 1
