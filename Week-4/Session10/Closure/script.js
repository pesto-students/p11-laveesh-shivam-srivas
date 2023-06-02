// Step 1: Create a function named "counter" that takes no arguments and returns a function.
function counter() {
    // Initialize a count variable
    let count = 0;

    // Step 2: Return a function that increases the count variable by 1 and returns it when called.
    return function () {
        count++;
        return count;
    }
}

// Step 3: Create two instances of the counter function and assign them to variables named "firstCounter" and "secondCounter".
const firstCounter = counter();
const secondCounter = counter();

// Step 4: Call the "firstCounter" function five times and store the returned values in an array named "firstValues".
const firstValues = [];
for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
}

// Step 5: Call the "secondCounter" function three times and store the returned values in an array named "secondValues".
const secondValues = [];
for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
}
// Print the Arrays
console.log("First Values:", firstValues);
console.log("Second Values:", secondValues);
