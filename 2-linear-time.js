// "Linear Time" - O(n) example

const tank = ['marlin','dory','nemo','bubbles'];

// Example 1
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!')
        }
    }
}
findNemo(tank);

// Example 2
function findNemoAndDory(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "dory") {
            console.log("Found Dory!");
        }
    }
}
findNemoAndDory(tank);