// "Constant time" O(1) examples

const boxes = ['red', 'blue', 'green', 'yellow'];

// Example 1
function logFirstBox(array) {
  console.log(array[0]);
}
logFirstBox(boxes)

// Example 2
function logFirstTwoBoxes(array) {
  console.log(array[0]);
  console.log(array[1]);
}
logFirstTwoBoxes(boxes);
