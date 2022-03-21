#!/usr/bin/env ruby

puts "-- Number Adder --"

puts "What is the first number?"
first_number=gets
puts "What is the second number?"
second_number=gets

first_number=first_number.to_i
second_number=second_number.to_i
full_number = first_number+second_number
puts full_number
