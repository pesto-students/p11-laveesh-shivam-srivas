function generateTransactionId() {
    // Initialize a counter variable to keep track of the number of generated transaction IDs
    let counter = 0;

    // Define a constant string to be concatenated with the unique number
    const prefix = 'transaction';

    // Generate a new unique transaction ID by concatenating the prefix with the counter
    const id = Symbol(`${prefix}${counter}`);

    // Increment the counter for the next transaction ID
    counter++;

    return id;
}

const transaction1 = generateTransactionId();
const transaction2 = generateTransactionId();
const transaction3 = generateTransactionId();

console.log(transaction1);
console.log(transaction2);
console.log(transaction3);
