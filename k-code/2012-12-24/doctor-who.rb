#!/usr/bin/env ruby

puts "-- Doctor Who Catchphrases --"
puts
puts "Which Doctor's catchphrase would you like [9-11]?"

number = gets.to_i


catchphrase9 = "Fantastic"
catchphrase10 = "Brilliant"
catchphrase11 = "Geronimo!"

if number == 9
  puts catchphrase9
elsif number == 10
  puts catchphrase10
elsif number == 11
  puts catchphrase11
else
  puts "That wasn't a valid Doctor"
end




=begin

If the number is 9, display catchphrase9
If the number is 10, display catchphrase10
If the number is 11, display catchphrase11




=end