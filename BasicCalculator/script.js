let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    // Replace the last operator with the new one
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (!isNaN(key)) {
    appendNumber(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    appendOperator(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault(); // ⛔ Prevent page reload
    calculateResult();
  } else if (key === 'Backspace') {
    event.preventDefault(); // Optional: stop going back in browser history
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '.') {
    appendNumber('.');
  }
});

