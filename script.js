let display = document.getElementById("display");
let calculator = document.getElementById("calculator");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1 || display.innerText === "0") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

function toggleMode() {
  document.body.classList.toggle("dark");
  calculator.classList.toggle("dark");

 
  calculator.classList.add("flash");
  setTimeout(() => {
    calculator.classList.remove("flash");
  }, 200);
}


const style = document.createElement("style");
style.innerHTML = `
  .flash {
    box-shadow: 0 0 100px white;
    transition: box-shadow 0.2s;
  }
`;
document.head.appendChild(style);
