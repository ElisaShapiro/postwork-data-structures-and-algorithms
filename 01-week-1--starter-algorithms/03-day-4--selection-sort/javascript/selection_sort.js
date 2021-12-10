function selectionSort(arr) {
  const sortArray = []
  while (arr.length > 0){
    let minimun = Math.min(...arr)
    let index = arr.indexOf(minimun)
    sortArray.push(minimun)
    arr.splice(index, 1)
  }
  return sortArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-7, 7, 77, 777]");
  console.log("=>", selectionSort([77, 777, 7, -7]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  
  const startTime = Date.now()
  for (let i = 0; i < 1000; ++i){
    selectionSort([2, 1])
    selectionSort(longInput)
  }
  const avgTime = (Date.now() - startTime) / 2000
  console.log(avgTime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// make empty array for sorted result, get the minimums out of input array in to sorted array in order
// And a written explanation of your solution
