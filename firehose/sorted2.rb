def sorted(arr)
  min = 0
  arr.each do |i|
    min = arr[i]
    if arr[i] > min
      min = arr[i]
    else
    end
  end
end

sorted([7, 5, 8])
sorted([1, 2, 3, 4])
