// space complexity (memory)

const logBooForEachInput = (array) => {
    for (let i = 0; i < array.length; i++) { // assigned variable 'let i = 0', O(1)
        console.log('boo!')
    }
}

logBooForEachInput([1, 2, 3, 4, 5]); // Space complexity = O(1), because the only memory used was assigning the variable

const arrayOfBooNTimes = (n) => {
    let booArray = []; // created data structure, O(1)
    for (let i = 0; i < n; i++) { // assigned variable, O(1)
        booArray[i] = 'boo' // filled data structure with 'n' loops, O(n)
    }
    return booArray;
}

console.log(arrayOfBooNTimes(6)); // Space Complexity = O(n)