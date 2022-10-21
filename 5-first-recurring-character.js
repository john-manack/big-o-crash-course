//Google Interview Question - 'First Recurring Character'
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Nested for loops
// Time complexity = O(n^2) yikes
// Space complexity = O(1) great
function firstRecurringCharacter1(input) {
  // O(1) space complexity for defining variable here
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// Single for loop on JS Object
// Time complexity = O(n) not bad
// Space Complexity = O(n) bc of drop non-dominants rule
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
