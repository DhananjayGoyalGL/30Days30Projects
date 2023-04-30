//Storing Random Number
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessInput = document.getElementById("guess");
let message = document.getElementById("message");

//When Guess button gets clicked
function checkGuess() {
  let guess = parseInt(guessInput.value);

  if (guess === secretNumber) {
    message.innerHTML = "Congratulations! You guessed the secret number!";
    message.style.color = "green";
  } else if (guess < secretNumber) {
    message.innerHTML = "Too low, try again";
    message.style.color = "red";
  } else if (guess > secretNumber) {
    message.innerHTML = "Too high, you need to try again";
    message.style.color = "red";
  }
}

//When reset button gets clicked
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = "";
  message.innerHTML = "";
}
