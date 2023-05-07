

array = [5, 7, 9, 3, 2, 1]

hash_table = {}

array.each do |i|
  hash_table[i] = true
end

hash_table = {
  5 => true,
  7 => true,
  9 => true,
  3 => true,
  2 => true,
  1 => true,
}

# now we have a hash table

number_diff = 0
k = 2

array.each do |i|
  number_diff += 1 if hash_table[i + k]
  number_diff += 1 if hash_table[i - k]
end
