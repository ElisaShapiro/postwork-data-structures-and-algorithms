def rotate_array(arr, k)
  number_of_rotations = k % arr.length
  remaining = arr.slice!(arr.length - number_of_rotations, number_of_rotations)
  remaining + arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [4, 1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3, 4], 1)

  puts

  puts "Expecting: [2, 3, 1]"
  print "=> "
  print rotate_array([1, 2, 3], 2)

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3], 3)
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
