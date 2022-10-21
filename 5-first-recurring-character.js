//'First Recurring Character'
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Nested for loops approach
function firstRecurringCharacter1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter1([2, 1, 2, 5, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter1([2, 3, 4, 5]));
// Space Complexity:
// Time Complexity:

// Single for loop on JS Object
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

console.log(firstRecurringCharacter2([2, 1, 2, 5, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 3, 4, 5]));
// Space Complexity =
// Time complexity =