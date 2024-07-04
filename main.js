let displayValue = '';
let operator = '';
let num1 = '';
let num2 = '';
//calculator functions
const add = function(n, i) {
  return n+i;
};
const subtract = function(n, i) {
	return n-i
};
const multiply = function(n, i) {
  return  n * i;
};
const divide = function(n, i) {
  return n / i;
}


//const num1 = parseInt(prompt("please select a number"));
//const operator = prompt("please select an operator");
//const num2 = parseInt(prompt("please select the second number"));

//operator functions
function operate(operator, num1, num2) {
if (operator == "+"){
  console.log(add(num1, num2))
}else if(operator =="-"){
  console.log(subtract(num1, num2))
}else if(operator == "*"){
  console.log(multiply(num1, num2))
}else if(operator == "/"){
  console.log(divide(num1, num2))
}
};

//update display function
const output = document.querySelector(".output");
function updateOutput() {
  output.value = displayValue;
}

function appendToDisplay(value) {
  output.innerHTML += value
}




//number buttons with event listeners
document.getElementById("num-button-1").addEventListener('click', () => appendToDisplay('1'));
document.getElementById("num-button-2").addEventListener('click', () => appendToDisplay('2'));
document.getElementById("num-button-3").addEventListener('click', () => appendToDisplay('3'));
document.getElementById("num-button-4").addEventListener('click', () => appendToDisplay('4'));
document.getElementById("num-button-5").addEventListener('click', () => appendToDisplay('5'));
document.getElementById("num-button-6").addEventListener('click', () => appendToDisplay('6'));
document.getElementById("num-button-7").addEventListener('click', () => appendToDisplay('7'));
document.getElementById("num-button-8").addEventListener('click', () => appendToDisplay('8'));
document.getElementById("num-button-9").addEventListener('click', () => appendToDisplay('9'));
document.getElementById("num-button-0").addEventListener('click', () => appendToDisplay('0'));

//operator buttons
document.getElementById('+').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('-').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('x').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('/').addEventListener('click', () => appendToDisplay('/'));

