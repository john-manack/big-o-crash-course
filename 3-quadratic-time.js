// "Quadratic Time" - O(n^2) example

// Log all pairs of array ([1,1], [1,2], [1,3], etc..)

const array = [1, 2, 3, 4, 5];

const logAllPairs = (integerArray) => {
  integerArray.forEach((ints) => {
    for (let i = 0; i < integerArray.length; i++) {
      console.log(`[${ints},${integerArray[i]}]`);
    }
  });
};

logAllPairs(array);
