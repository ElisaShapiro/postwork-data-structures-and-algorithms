def consecutive_substrings(string)
  subString = []
  string.split('').each_with_index do |char, index|
    subString << char
    frag = char
    string[index + 1..-1].split('').each_with_index do |letter|
      frag += letter
      subString << frag
    end
  end
  subString
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print "=> " 
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print "=> " 
  print consecutive_substrings('a')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
