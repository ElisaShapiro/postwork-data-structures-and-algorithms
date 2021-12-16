function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  let nextString = findShortestStringRecursive(arr.slice(1))
  return arr[0].length <= nextString.length ? arr[0] : nextString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'no'");
  console.log("=>", findShortestStringRecursive(['nah', 'nope', 'no', 'nosiree']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
