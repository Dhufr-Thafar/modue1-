// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}


let num1 = 10;
let num2 = 5;

console.log(add(num1, num2));         
console.log(subtract(num1, num2)); 
console.log(multiply(num1, num2)); 
console.log(divide(num1, num2));   