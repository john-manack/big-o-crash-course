// "Quadratic Time" - O(n^2) example

// Log all pairs of array

const array = [1, 2, 3, 4, 5, 5];

const logAllPairs = (integerArray) => {
  integerArray.forEach((ints) => { // O(n)
    for (let i = 0; i < integerArray.length; i++) { //O(n)
      console.log(`[${ints},${integerArray[i]}]`);
    }
  });
};

logAllPairs(array); // 0(n^2) --> Quadratic Time

// what is the big O? Any time you see nested loops, the element (n) is multiplied by 2
