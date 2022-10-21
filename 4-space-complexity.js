// space complexity (memory)

const logBooForEachInput = (n) => {
    for (let i = 0; i < n.length; i++) { // assigned variable 'let i = 0', O(1)
        console.log('boo!')
    }
}

logBooForEachInput([1, 2, 3, 4, 5]); // Space complexity = O(1), because the only memory used was assigning the variable

const arrayOfBooNTimes = (n) => {
    let hiArray = []; // created data structure, O(1)
    for (let i = 0; i < n; i++) { // assigned variable, O(1)
        hiArray[i] = 'hi' // filled data structure with 'n' loops, O(n)
    }
    return hiArray;
}

console.log(arrayOfBooNTimes(6)); // Space Complexity = O(n)