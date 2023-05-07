

class TreeNode
  attr_accessor :value, :children

  def initialize(value, children = [])
    @value = value
    @children = children
  end
end


node5 = TreeNode.new(5)
node4 = TreeNode.new(4)
node3 = TreeNode.new(3, [node4, node5])
node2 = TreeNode.new(2)
node1 = TreeNode.new(1, [node2, node3])

        1
    2       3
          4   5
        7
def dfs(node, value)
  return node if node.value == value

  node.children.each do |child|
    found_node = dfs(child, value)
    return found_node unless found_node.nil?
  end

  return nil
end

node = dfs(node1, 4)
node.children << TreeNode.new(7)


def bfs(node, value)
  puts "node #{node.value}"
  return node if node.value == value

  queue = []

  node.children.each { |child| queue << child }

  while (child = queue.shift)
    puts "node #{child.value}"
    return child if child.value == value

    child.children.each { |child| queue << child }
  end

  return nil
end

node = dfs(node1, 4)
node.children << TreeNode.new(7)
