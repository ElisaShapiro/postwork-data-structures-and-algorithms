function recursiveCount(num = 0) {
  if (num >= 10) {
    return;
  } 
  console.log(num)
  recursiveCount(++num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
//set end case of num reaching 10 
//set function to add one to num each time run
// And a written explanation of your solution
