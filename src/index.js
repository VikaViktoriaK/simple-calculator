import './styles.css'

let current = '0';
let operator = null;
let previous = null;
let resetNext = false;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = current.replace('.', ',');
}

function handleNumber(number) {
  if (resetNext) {
    current = number;
    resetNext = false;
  } else {
    current = current === '0' ? number : current + number;
  }
}

function handleOperator(op) {
  if (operator && !resetNext) compute();
  previous = current;
  operator = op;
  resetNext = true;
}

function compute() {
  const prev = parseFloat(previous.replace(',', '.'));
  const curr = parseFloat(current.replace(',', '.'));
  if (isNaN(prev) || isNaN(curr)) return;
  switch (operator) {
    case 'add': current = (prev + curr).toString(); break;
    case 'subtract': current = (prev - curr).toString(); break;
    case 'multiply': current = (prev * curr).toString(); break;
    case 'divide': current = curr === 0 ? 'Error' : (prev / curr).toString(); break;
  }
  operator = null;
  resetNext = true;
}

function handlePercent() {
  current = (parseFloat(current.replace(',', '.')) / 100).toString();
}

function handleSign() {
  current = (-parseFloat(current.replace(',', '.'))).toString();
}

function clear() {
  current = '0';
  previous = null;
  operator = null;
  resetNext = false;
}

document.querySelectorAll('.btn').forEach(btn => {
  const number = btn.dataset.number;
  const action = btn.dataset.action;

  btn.addEventListener('click', () => {
    if (number !== undefined) handleNumber(number);
    else if (action === 'add') handleOperator('add');
    else if (action === 'subtract') handleOperator('subtract');
    else if (action === 'multiply') handleOperator('multiply');
    else if (action === 'divide') handleOperator('divide');
    else if (action === 'percent') handlePercent();
    else if (action === 'sign') handleSign();
    else if (action === 'clear') clear();
    else if (action === 'equals') compute();

    updateDisplay();
  });
});

updateDisplay();
