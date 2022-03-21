#!/usr/bin/env ruby

puts "-- Number Incrementor --"

puts "Enter a number and I'll tell you what comes after it"
puts
puts "What is your number?"

number = gets.to_i

next_number = number+1

puts "The next number is " + next_number.to_s