// "Constant time" O(1) examples

const boxes = ['red', 'blue', 'green', 'yellow'];

// Example 1
function logFirstBox(array) {
  console.log(array[0]); // O(1)
}
logFirstBox(boxes) // O(1) --> Constant Time

// Example 2
function logFirstTwoBoxes(array) {
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
}
logFirstTwoBoxes(boxes); // in total, runs O(2), but we drop constants (or reduce to 1): O(1) - "Constant time"
