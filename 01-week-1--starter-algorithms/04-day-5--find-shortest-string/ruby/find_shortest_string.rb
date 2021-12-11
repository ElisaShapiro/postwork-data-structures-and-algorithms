def find_shortest_string(arr)
  short = arr[0]
  arr.each do |one_string| 
    if one_string.length < short.length
      short = one_string
    end
  end
  short
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  puts
  
  puts "Expecting: 'homsar'"
  puts "=>", find_shortest_string(['homestar', 'homsar', 'strong bad', 'coach z'])
  # Don't forget to add your own!

  # BENCHMARK HERE
  start_time = Time.now
  1000.times do 
    find_shortest_string([['homestar', 'homsar', 'strong bad', 'coach z']])
  end
  avg_time = (Time.now - start_time) / 1000
  puts avg_time
end

# Please add your pseudocode to this file
# And a written explanation of your solution
