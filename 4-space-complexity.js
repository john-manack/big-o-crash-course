// space complexity (memory)

const logBooForEachInput = (n) => {
    for (let i = 0; i < n.length; i++) {
        console.log('boo!')
    }
}

logBooForEachInput([1, 2, 3, 4, 5]);

const arrayOfBooNTimes = (n) => {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi'
    }
    return hiArray;
}

console.log(arrayOfBooNTimes(6));