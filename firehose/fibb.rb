def iterative_fib(num)
  if num == 0
    0
  else
    first_num = 0
    second_num = 1

    (num - 1).times do
      sum = first_num + second_num
      first_num = second_num
      second_num = sum
    end

    second_num
  end
end

puts iterative_fib(35)

def recursive_fib(num)
  if num == 0
    return 0
  elsif num == 1 || num == 2
    return 1
  else
    recursive_fib(num - 1) + recursive_fib(num - 2)
  end
end

recursive_fib(4)
recursive_fib(2) + recursive_fib(1) + recursive_fib(2)

recursive_fib(6)

recursive_fib(2)
  + recursive_fib(1)
  + recursive_fib(2)
  + recursive_fib(2)
  + recursive_fib(1)
  + recursive_fib(2)
  + recursive_fib(1)
  + recursive_fib(2)

# require 'benchmark'
# num = 35
# Benchmark.bm do |x|
#   #x.report("recursive_fib") { recursive_fib(num) }
#   x.report("iterative_fib") { iterative_fib(num) }
# end
