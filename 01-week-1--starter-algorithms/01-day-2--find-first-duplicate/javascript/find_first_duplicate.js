function findFirstDuplicate(arr) {
  const noDuplicates = new Set()
  for (const val of arr) {
    if (noDuplicates.has(val)) {
      return val
    }
    noDuplicates.add(val)
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 7");
  console.log("=>", findFirstDuplicate([8, 7, 7, 9]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([4, 3, 2, 1]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// make empty set to put in values - iterate through array if unique value put into the set, if value matches something in the set return that value

// And a written explanation of your solution
// 