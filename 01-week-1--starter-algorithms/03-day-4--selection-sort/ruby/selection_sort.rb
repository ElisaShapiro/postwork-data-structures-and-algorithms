def selection_sort(arr)
  sortArray = []
  until arr.length == 0
    minimum = arr.min
    index = arr.index(minimum)
    sortArray << minimum
    arr.delete_at(index)
  end
  sortArray
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  puts "Expecting: [-7, 7, 77, 777]"
  print "=> "
  print selection_sort([77, 777, 7, -7])

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }

  start_time = Time.now
  1000.times do
    selection_sort([2, 1])
    selection_sort(long_input)
  end
  avg_time = (Time.now - start_time) / 2000
  puts avg_time
end

# Please add your pseudocode to this file
# And a written explanation of your solution
