def balancing_parentheses(string)
  openingP = 0
  closingP = 0
  string.chars.each do |char|
    if char == '('
      openingP += 1
      next
    end
    if openingP > 0
      openingP -= 1
    else
      closingP += 1
    end
  end
  openingP + closingP
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
