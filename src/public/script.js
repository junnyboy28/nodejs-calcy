let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculate() {
  try {
    if (!currentInput.match(/^[\d+\-*/.() ]+$/)) throw new Error();
    currentInput = eval(currentInput);
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  if (typeof document !== "undefined") {
    document.getElementById("display").value = currentInput;
  }
}

// Export for Jest testing
if (typeof module !== "undefined") {
  module.exports = { appendToDisplay, clearDisplay, calculate };
}
