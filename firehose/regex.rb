str = "1 2 3 4 a"

regex = /[^\d ]/

puts regex.match(str).inspect
