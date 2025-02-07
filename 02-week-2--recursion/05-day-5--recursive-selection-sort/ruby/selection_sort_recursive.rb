def selection_sort_recursive(arr)
  return [] if arr.empty?
  min = arr.min
  index = arr.index(min)
  arr.delete_at(index)
  order = selection_sort_recursive(arr)
  order.unshift(min)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
