// "Constant time" O(1) examples

const boxes = [0, 1, 2, 3, 4, 5];

// Example 1
function logFirstBox(boxArray) {
  console.log(boxArray[0]); // O(1)
}
logFirstBox(boxArray[0]) // O(1) --> Constant Time

// Example 2
function logFirstTwoBoxes(boxArray) {
  console.log(boxArray[0]); // O(1)
  console.log(boxArray[1]); // O(1)
}
logFirstTwoBoxes(boxes); // in total, runs O(2), but we drop constants (or redue to 1): O(1) - "Constant time"
