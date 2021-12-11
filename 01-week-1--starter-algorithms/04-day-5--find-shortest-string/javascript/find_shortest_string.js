function findShortestString(arr) {
  let short = arr[0]
  arr.forEach(oneString => {
    if (oneString.length < short.length) {
      short = oneString
    }
  })
  return short
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: 'homsar'");
  console.log("=>", findShortestString(['homestar', 'homsar', 'strong bad', 'coach z']));

  // BENCHMARK HERE
  const startTime = Date.now()
  for (let i = 0; i < 1000; ++i) {
    findShortestString(['homestar', 'homsar', 'strong bad', 'coach z'])
  }
  const avgTime = (Date.now() - startTime) / 1000
  console.log(avgTime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
