
class LinkedListNode
  attr_accessor :value, :next_node

  def initialize(value, next_node)
    @value = value
    @next_node = next_node
  end
end

class Stack
  def initialize
    @data = nil
  end

  def push(value)
    @data = LinkedListNode.new(value, @data)
  end

  def pop
    return nil if @data == nil

    value = @data.value
    @data = @data.next_node
    return value
  end
end

def reverse_list(list)
  stack = Stack.new

  while list != nil
    stack.push(list.value)
    list = list.next_node
  end
end

Original:    3 > 2 > 1 > nil

stack.@data: 1 > 2 > 3 > nil
