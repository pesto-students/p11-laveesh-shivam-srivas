function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
    let guess;
    let promptText = "Enter a number between 1 and 100";
    do {
        guess = prompt(promptText);
        if (guess === null) {
            return 0;
        }
        if (guess === "" || isNaN(guess)) {
            promptText = "Please enter a number";
        } else {
            guess = parseInt(guess);
            numGuesses++;
            if (guess < numToGuess) {
                promptText = `${guess} is too small. Guess a larger number. (${totalGuesses - numGuesses} guesses left)`;
            } else if (guess > numToGuess) {
                promptText = `${guess} is too large. Guess a smaller number. (${totalGuesses - numGuesses} guesses left)`;
            } else {
                alert(`Congratulations, you guessed the number ${numToGuess} in ${numGuesses} guesses!`);
                return numGuesses;
            }
        }
    } while (numGuesses < totalGuesses);

    alert(`Sorry, you did not guess the number ${numToGuess} in ${totalGuesses} tries.`);
    return numGuesses;
}

const numToGuess = Math.floor(Math.random() * 100) + 1;
const numGuesses = playGuessingGame(numToGuess, 10);
console.log(`The number was ${numToGuess} and it took ${numGuesses} guesses to get it right.`);