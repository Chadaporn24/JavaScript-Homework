let secretNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const resultMessage = document.getElementById("resultMessage");

submitBtn.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    resultMessage.textContent = "❌ Please enter a number between 1 and 100!";
    resultMessage.style.color = "#f44336";
    return;
  }

  if (guess === secretNumber) {
    resultMessage.textContent = `🎉 Correct! ${guess} is the number!`;
    resultMessage.style.color = "#4CAF50";
  } else if (guess < secretNumber) {
    resultMessage.textContent = "📉 Too low! Try a higher number.";
    resultMessage.style.color = "#333";
  } else {
    resultMessage.textContent = "📈 Too high! Try a lower number.";
    resultMessage.style.color = "#333";
  }

  guessInput.value = "";
});

resetBtn.addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  resultMessage.textContent = "";
  guessInput.value = "";
});
