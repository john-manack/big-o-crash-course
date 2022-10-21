// "Linear Time" - O(n) example

const tank = ['marlin','dory','nemo','bubbles'];

// Example 1
function findNemo(array) {
    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === 'nemo') {
            console.log('Found Nemo!')
        }
    }
}
findNemo(tank); // 0(n) --> Linear Time

// Example 2
function findNemoAndDory(array) {
    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }

    for (let i = 0; i < array.length; i++) { // O(n)
        if (array[i] === "dory") {
            console.log("Found Dory!");
        }
    }
}
findNemoAndDory(tank); // in total, runs O(2n), but we drop the constants: O(n) --> Linear Time