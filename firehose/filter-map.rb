a = [1, 2, 3, 4]

new_arr = a.filter do |i|
  i % 2 == 0
end

new_arr = a.map do |i, idx|
  i % 2 == 0 ? i * 2 : i
end
