function fibonacci(num) {
  if (num < 2) {
    return num
  }
  let twoNum = [0, 1]
  for (let i = 0; i < num-1; ++i) {
    const sum = twoNum[0] + twoNum[1]
    twoNum = [twoNum[1], sum]
  }
  return twoNum[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", fibonacci(4));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
