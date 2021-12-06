function reverseString(str) {
  let backwardsWord  = ""
  for (let i = str.length - 1; i > -1; --i){
    backwardsWord = backwardsWord + str[i]
  }
  return backwardsWord
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'tacocat ekil'");
  console.log("=>", reverseString("like tacocat"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Pseudocode: 
// need to iterate through index and replace - index[0] becomes index[str-1] and so on

//Explanation: 
//iterate through string, put each character in turn into result string