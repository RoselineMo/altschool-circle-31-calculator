const calcInput = document.querySelector("#calc-input");
const display = document.querySelector('.display');

function inputValue(digit) {
  calcInput.value = calcInput.value + digit;
}


// Clear and Delete button
const clr = () => {
  display.value = "";
}

const del = () => {
  display.value = display.value.toString().slice(0, -1);
};


