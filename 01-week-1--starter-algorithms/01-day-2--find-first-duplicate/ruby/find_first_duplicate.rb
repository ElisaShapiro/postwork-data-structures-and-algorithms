require 'set'
def find_first_duplicate(arr)
  noDuplicates = Set.new 

  arr.each do |val|
    return val if noDuplicates.include?(val)
    noDuplicates.add(val)
  end
  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([8, 7, 7, 9]);

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([4, 3, 2, 1]);
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
