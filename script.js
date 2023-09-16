const calcInput = document.querySelector("#calc-input");
const display = document.querySelector('.display');
const Sum = document.getElementById("sum")

function inputValue(digit) {
  if (calcInput.value.slice(-1)=== digit) {
    return;
  } else {
    calcInput.value = calcInput.value + digit;
  }

}


// Clear and Delete button
const clr = () => {
  display.value = "";
  Sum.value = "";
}

const del = () => {
  display.value = display.value.toString().slice(0, -1);
};


function solution () {
   if (display.value === "") {
    alert ("Please enter numbers!")
   } else {
    let sol = eval(calcInput.value)
     Sum.textContent = sol
   }
   
}