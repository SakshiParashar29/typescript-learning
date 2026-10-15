"use strict";
// primitive types
Object.defineProperty(exports, "__esModule", { value: true });
let isDone = false;
let username = "Hope";
let age = 21;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Hope", "Joey"];
// Tuples
let person = ["Hope", 27];
// enum -> takes only sepecified value
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let favouriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "hope";
randomValue = true;
// Unknow (safer than any)
let userInput;
userInput = 5;
userInput = "text";
// Both any and unknown can hold values of any type. However, any disables type checking, while unknown requires type narrowing or validation before you can safely perform operations on the value. Prefer unknown when the type is not known.
// Void (functions that don't return anything)
function subscribe(message) {
    console.log(message);
}
