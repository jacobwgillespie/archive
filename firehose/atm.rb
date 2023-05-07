def withdraw(amount)
  if amount <= 0 # this deals with some of the situations...
    return false
  end
  return false unless amount % 5 == 0
  amount / 5
end

require 'minitest/spec'
require 'minitest/autorun'

describe 'atm' do
  [
    [-1, false],
    [0, false],
    [1, false],
    [43, false],
    [7, false],
    [5, 1],
    [20, 4],
    [35, 7],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
