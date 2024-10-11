// START_EXERCISE_7
let num1 = 10;
let num2 = 5;

if (add(num1, num2) != 15) { throw new Error }
if (add(0, num2) != "unacceptable") { throw new Error }
function add(a, b) {        // summation
   if (a <= 0 || b <=0 ) return "unacceptable";
    return a + b;
}

if (subtract(num1, num2) != 5) {  throw new Error  }
if (add(0, num2) != "unacceptable") { throw new Error }

function subtract(a, b) {       //subtraction
    if (a <= 0 || b <=0 ) return "unacceptable";
    return a - b;
}

if (multiply(num1, num2) != 50) {  throw new Error  }
if (add(0, num2) != "unacceptable") { throw new Error }

function multiply(a, b) {       //multiply
  if (a <= 0 || b <=0 ) return "unacceptable";
  return a * b;
}

if (divide(num1, num2) != 2) {  throw new Error  }
if (add(0, num2) != "unacceptable") { throw new Error }

function divide(a, b) {         //divide
     if (a <= 0 || b <=0 ) return "unacceptable";
     if (b !== 0) {
         return a / b;
     } else {
         return "Error: Division by zero";
     }
}

console.log(add(num1, num2));         
console.log(subtract(num1, num2)); 
console.log(multiply(num1, num2)); 
console.log(divide(num1, num2));   