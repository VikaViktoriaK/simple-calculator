import "./styles.css";

let current = "0";
let operator = null;
let previous = null;
let resetNext = false;

const display = document.getElementById("display");

const updateDisplay = () => {
  display.textContent = current.replace(".", ",");
};

const handleNumber = (number) => {
  if (number === ",") {
    if (current.includes(",")) return;
    if (resetNext) {
      current = "0,";
      resetNext = false;
      return;
    }
    current += ",";
    return;
  }

  if (resetNext) {
    current = number;
    resetNext = false;
  } else {
    current = current === "0" ? number : current + number;
  }
};

const handleOperator = (op) => {
  if (operator && !resetNext) compute();
  previous = current;
  operator = op;
  resetNext = true;
};

const compute = () => {
  const prev = parseFloat(previous.replace(",", "."));
  const curr = parseFloat(current.replace(",", "."));
  if (isNaN(prev) || isNaN(curr)) return;
  switch (operator) {
    case "add":
      current = (prev + curr).toString();
      break;
    case "subtract":
      current = (prev - curr).toString();
      break;
    case "multiply":
      current = (prev * curr).toString();
      break;
    case "divide":
      current = curr === 0 ? "Error" : (prev / curr).toString();
      break;
  }
  operator = null;
  resetNext = true;
};

const handlePercent = () => {
  current = (parseFloat(current.replace(",", ".")) / 100).toString();
};

const handleSign = () => {
  current = (-parseFloat(current.replace(",", "."))).toString();
};

const clear = () => {
  current = "0";
  previous = null;
  operator = null;
  resetNext = false;
};

document.querySelectorAll(".btn").forEach((btn) => {
  const number = btn.dataset.number;
  const action = btn.dataset.action;

  btn.addEventListener("click", () => {
    if (number !== undefined) handleNumber(number);
    else if (action === "add") handleOperator("add");
    else if (action === "subtract") handleOperator("subtract");
    else if (action === "multiply") handleOperator("multiply");
    else if (action === "divide") handleOperator("divide");
    else if (action === "percent") handlePercent();
    else if (action === "sign") handleSign();
    else if (action === "clear") clear();
    else if (action === "equals") compute();

    updateDisplay();
  });
});

updateDisplay();

document.querySelector(".red").addEventListener("click", () => {
  document.body.className = "theme-red";
});

document.querySelector(".orange").addEventListener("click", () => {
  document.body.className = "theme-orange";
});

document.querySelector(".green").addEventListener("click", () => {
  document.body.className = "theme-green";
});
