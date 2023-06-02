function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    // Iterate through the numbers array and divide them into even and odd arrays
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNums.push(numbers[i]);
        } else {
            oddNums.push(numbers[i]);
        }
    }

    // Sort both arrays in ascending order
    evenNums.sort(function (a, b) {
        return a - b;
    });
    oddNums.sort(function (a, b) {
        return a - b;
    });

    // Output the array values to the console
    console.log("Even Numbers: " + evenNums);
    console.log("Odd Numbers: " + oddNums);
}

// Example usage:
let numbers = [5, 3, 8, 4, 2, 9, 7, 6, 1];
divideArray(numbers);