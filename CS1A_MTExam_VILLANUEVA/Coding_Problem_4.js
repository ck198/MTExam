let favoriteNumber = 7;
let guess;

while (guess != favoriteNumber) {
    guess = Number(prompt("Guess my favorite number:"));

    if (guess > favoriteNumber) {
        console.log("Too high! Try again.");
    } else if (guess < favoriteNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Congratulations! You guessed it right.");
    }
}
