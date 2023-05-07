def sorted?(arr)
  max = arr.first
  arr.each do |i|
    return false if i < max
    max = i
  end

  true
end

def sorted?(arr)
  sorted = arr.sort

  arr.each_with_index do |i, idx|
    return false if i != sorted[idx]
  end

  true
end

def sorted?(arr)
  arr == arr.sort
end

def sorted?(arr)
  (1...arr.length).each do |idx|
    return false if arr[idx - 1] > arr[idx]
  end

  true
end

def sorted?(arr)
  arr.each_cons(2).all? do |left, right|
    left <= right
  end
end
