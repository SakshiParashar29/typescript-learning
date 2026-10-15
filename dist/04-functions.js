"use strict";
// Basic function with types
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// Optional Parameter (use ? for marking optional)
function greet(name, greeting) {
    if (greeting)
        return `${greeting}, ${name}!`;
    return `Hello, ${name}!`;
}
// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Arrow functions
const divide = (a, b) => a / b;
// Function types
let calculate;
calculate = add;
