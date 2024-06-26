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

const num1 = parseInt(prompt("please select a number"));
const operator = prompt("please select an operator");
const num2 = parseInt(prompt("please select the second number"));

if (operator == "+"){
  console.log(add(num1, num2))
}else if(operator =="-"){
  console.log(subtract(num1, num2))
}else if(operator == "*"){
  console.log(multiply(num1, num2))
}else if(operator == "/"){
  console.log(divide(num1, num2))
};