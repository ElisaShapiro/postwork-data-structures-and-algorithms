def reverse_string(str)
  backwards_string = ""
  str.chars.each do |letter|
    backwards_string = letter + backwards_string
  end
  backwards_string
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
  puts

  puts "Expecting: 'tacocat ekil"
  puts "=>", reverse_string('like tacocat')
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# Pseudocode:
# iterate over each letter, add to a string, then add up

# Explanation: 
# Take each letter, store it, then as go through string will be stored in reverse