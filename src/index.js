import {
  handleNumber,
  handleOperator,
  compute,
  handlePercent,
  handleSign,
  clear,
  updateDisplay,
} from "./calculator.js";
import "./styles.css";

const display = document.getElementById("display");

document.querySelectorAll(".btn").forEach((btn) => {
  const number = btn.dataset.number;
  const action = btn.dataset.action;

  btn.addEventListener("click", () => {
    if (number !== undefined) {
      handleNumber(number);
    } else if (action) {
      switch (action) {
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
          handleOperator(action);
          break;
        case "percent":
          handlePercent();
          break;
        case "sign":
          handleSign();
          break;
        case "clear":
          clear();
          break;
        case "equals":
          compute();
          break;
      }
    }

    updateDisplay(display);
  });
});

updateDisplay(display);

document.querySelector(".red").addEventListener("click", () => {
  document.body.className = "theme-red";
});
document.querySelector(".orange").addEventListener("click", () => {
  document.body.className = "theme-orange";
});
document.querySelector(".green").addEventListener("click", () => {
  document.body.className = "theme-green";
});
