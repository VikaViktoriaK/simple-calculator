import { parseNumber } from "./utils.js";

let current = "0";
let operator = null;
let previous = null;
let resetNext = false;

export const updateDisplay = (el) => {
  el.textContent = current.replace(".", ",");
};

export const handleNumber = (number) => {
  if (!resetNext && current.length >= 10) return;
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

export const handleOperator = (op) => {
  if (operator && !resetNext) compute();
  previous = current;
  operator = op;
  resetNext = true;
};

const formatResult = (value) => {
  let str = value.toString();

  if (str.length > 9) {
    str = str.slice(0, 9) + "...";
  }

  return str;
};

export const compute = () => {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;

  let result;

  switch (operator) {
    case "add":
      result = prev + curr;
      break;
    case "subtract":
      result = prev - curr;
      break;
    case "multiply":
      result = prev * curr;
      break;
    case "divide":
      result = curr === 0 ? "Error" : prev / curr;
      break;
  }

  current = result === "Error" ? "Error" : formatResult(result);
  operator = null;
  resetNext = true;
};

export const handlePercent = () => {
  current = (parseNumber(current) / 100).toString();
};

export const handleSign = () => {
  current = (-parseNumber(current)).toString();
};

export const clear = () => {
  current = "0";
  previous = null;
  operator = null;
  resetNext = false;
};
