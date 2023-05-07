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
  node = nil
  while list != nil
    print "list: "
    print_values(list)
    puts "list.value: #{list.value}"
    print "node: "
    print_values(node)

    node = LinkedListNode.new(list.value, node)
    list = list.next_node

    print "list (after): "
    print_values(list)
    print "node (after): "
    print_values(node)
    puts "---------"
  end
  node
end


class Stack
  attr_reader :data

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

node1 = LinkedListNode.new(37)
node2 = LinkedListNode.new(99, node1)
node3 = LinkedListNode.new(12, node2)



print_values(node3)
puts "-------"
revlist = reverse_list(node3)
print_values(revlist)
