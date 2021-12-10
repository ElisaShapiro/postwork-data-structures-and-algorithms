def fibonacci(num)
  two_num = [0, 1]
  return two_num[num] if num < 2
  (num - 1).times do
    sum = two_num[0] + two_num[1]
    two_num = [two_num[1], sum]
  end
  two_num.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  puts

  puts "Expecting: 3"
  puts "=>", fibonacci(4)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# array with two values then iterate through the sums
# And a written explanation of your solution
