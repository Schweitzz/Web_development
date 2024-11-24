let currentInput = "0";
let lastOperator = "";
let newNumber = false;

const resultDisplay = document.getElementById("result");

function updateDisplay() {
  resultDisplay.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === "0" || newNumber) {
    currentInput = num;
    newNumber = false;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (!currentInput.endsWith(" ") && !currentInput.endsWith(".")) {
    currentInput += ` ${operator} `;
    newNumber = false;
  }
  updateDisplay();
}

function appendDecimal() {
  const parts = currentInput.split(" ");
  const lastPart = parts[parts.length - 1];

  if (!lastPart.includes(".")) {
    if (newNumber || currentInput === "0") {
      currentInput = "0.";
      newNumber = false;
    } else {
      currentInput += ".";
    }
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "0";
  lastOperator = "";
  newNumber = false;
  updateDisplay();
}

function deleteLastChar() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
    if (currentInput.endsWith(" ")) {
      currentInput = currentInput.slice(0, -3);
    }
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function toggleSign() {
  const parts = currentInput.split(" ");
  const lastPart = parts[parts.length - 1];

  if (!isNaN(lastPart)) {
    const newValue = (-parseFloat(lastPart)).toString();
    parts[parts.length - 1] = newValue;
    currentInput = parts.join(" ");
    updateDisplay();
  }
}

function calculatePercentage() {
  const parts = currentInput.split(" ");
  const lastPart = parts[parts.length - 1];

  if (!isNaN(lastPart)) {
    const percentage = (parseFloat(lastPart) / 100).toString();
    parts[parts.length - 1] = percentage;
    currentInput = parts.join(" ");
    updateDisplay();
  }
}

function calculate() {
  try {
    // Replace × with * for evaluation
    let expression = currentInput.replace(/×/g, "*");
    let result = eval(expression);

    // Handle division by zero
    if (!isFinite(result)) {
      throw new Error("Invalid calculation");
    }

    // Format the result
    if (Number.isInteger(result)) {
      currentInput = result.toString();
    } else {
      currentInput = result.toFixed(8).replace(/\.?0+$/, "");
    }

    newNumber = true;
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    newNumber = true;
    updateDisplay();
    setTimeout(clearDisplay, 1500);
  }
}
