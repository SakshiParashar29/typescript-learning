"use strict";
// Type assertions -> In TypeScript, type assertion means telling TypeScript what type you believe a value is.
Object.defineProperty(exports, "__esModule", { value: true });
let someValue = "Hello, I am Hope!";
let len = someValue.length;
// OR
let len2 = someValue.length;
// Type guards -> In TypeScript, type guards are checks that help us determine the actual type of a value before using it.
// A type guard is a condition or function that narrows a variable's type within a particular scope, allowing TypeScript to perform type-safe operations.
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// Instanceof type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
