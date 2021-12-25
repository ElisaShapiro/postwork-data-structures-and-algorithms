function consecutiveSubstrings(string) {
  const arrayString = string.split('')
  const subString = []
  arrayString.forEach((char, index) => {
    subString.push(char)
    let frag = char
    arrayString.slice(index + 1).forEach((letter) => {
      frag = frag + letter
      subString.push(frag)
    })
  })
  return subString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
