#!/usr/bin/env ruby

require 'rubygems'
require 'perl'

def foo(arg)
  Perl.run %Q{return #{arg};}, :return => :list
end

puts foo(42)
puts foo(13)


