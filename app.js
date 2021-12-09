const state = {
  currentOperand: "",
  previousOperand: "",
  operation: undefined,
};

const clear = () => {
  const newState = {
    currentOperand: "",
    previousOperand: "",
  };
  return newState;
};

const deleteNumber = () => {
  state.currentOperand.innerText = state.currentOperand.innerText
    .toString()
    .slice(0, -1);
};

const appendNumber = (number) => {
  if (number === "." && currentOperand.innerText.includes(".")) {
    return;
  }

  state.currentOperand.innerText =
    currentOperand.innerText.toString() + number.toString();
};

const chooseOperation = (operation) => {
  if (currentOperand === "") {
    return;
  }

  if (previousOperand !== "") {
    operate();
  }
  state.operation = operation;
  state.previousOperand = currentOperand;
  state.currentOperand = "";
};

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = () => {
  let computation;
  const previous = Number.parseFloat(previousOperand);
  const current = Number.parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return;
  }

  switch (operation) {
    case "+":
      computation = add(previous, current);
      break;
    case "-":
      computation = substract(previous, current);
      break;
    case "÷":
      computation = divide(previous, current);
      break;
    case "×":
      computation = multiply(previous, current);
      break;
  }

  state.currentOperand = computation;
  state.operation = undefined;
  state.previousOperand = "";
};

const getDisplayNumber = (number) => {
  const stringNumber = number.toString();
  const integerDigits = Number.parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay;

  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }

  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  }

  return integerDisplay;
};

const updateDisplay = () => {
  state.currentOperandTextElement.innerText = getDisplayNumber(
    state.previousOperand
  );

  if (operation != null) {
    state.previousOperandTextElement.innerText = `${getDisplayNumber(
      state.previousOperand
    )} ${operation}`;
  } else {
    previousOperandTextElement.innerText = "";
  }
};

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

numberButtons.foreach((button) => {
  button.addeventlistener("click", () => {
    appendNumber(button.innertext);
    updateDisplay();
  });
});

operationButtons.foreach((button) => {
  button.addeventlistener("click", () => {
    chooseOperation(button.innertext);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  operate();
  updateDisplay();
});

allClearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteButton.addEventListener("click", () => {
  deleteNumber();
  updateDisplay();
});
