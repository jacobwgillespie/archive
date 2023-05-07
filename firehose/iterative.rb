
    5
  4   6
3


def bredth_first(node, search)
  queue = [node]

  queue.each do |current_node|
    # check if this is the node

    current_node.children.each do |child|
      queue.push(child)
    end

  end


end

# def depth_first(node, search)
#   if node.value == search
#     return node
#   end

#   node.children.each do |child|
#     result = depth_first(child)
#     return result if result
#   end

#   return nil
# end
