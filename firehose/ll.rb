class LinkedListNode
  attr_accessor :value, :next_node

  def initialize(value, next_node=nil)
    @value = value
    @next_node = next_node
  end
end

def print_values(list_node)
  if list_node
    print "#{list_node.value} --> "
    print_values(list_node.next_node)
  else
    print "nil\n"
    return
  end
end

def reverse_list(list)
  stack = Stack.new

  while list != nil
    stack.push(list.value).value
    list = list.next_node
  end

  # stack.data

  stack2 = Stack.new
  item = stack.pop
  while item != nil
    stack2.push(item)
    item = stack.pop
  end

  item = stack2.pop
  node = nil
  while item != nil
    node = LinkedListNode.new(item, node)
    item = stack2.pop
  end
  node
end


class Stack
  def initialize
    @data = nil
  end

  def push(value)
    @data = LinkedListNode.new(value, @data)
  end

  def pop
    return nil if @data.nil?
    value = @data.value
    @data = @data.next_node
    value
  end
end

# class Stack
#   def initialize
#     @data = []
#   end

#   def push(value)
#     @data.push value
#   end

#   def pop
#     @data.pop
#   end
# end

node1 = LinkedListNode.new(37)
node2 = LinkedListNode.new(99, node1)
node3 = LinkedListNode.new(12, node2)



print_values(node3)
puts "-------"
revlist = reverse_list(node3)
print_values(revlist)
