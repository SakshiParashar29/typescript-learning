// primitive types

let isDone: boolean = false;
let username: string = "Hope";
let age: number = 21;

// Arrays

let numbers: number[] = [1,2,3,4,5];
let names: string[] = ["Hope", "Joey"];


// Tuples
let person : [string, number] = ["Hope", 27];

// enum -> takes only sepecified value

enum Color {
    Red,
    Blue,
    Green
}

let favouriteColor: Color = Color.Blue;

// Any (avoid when possible)

let randomValue: any = 10;
randomValue = "hope";
randomValue = true;

// Unknow (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Both any and unknown can hold values of any type. However, any disables type checking, while unknown requires type narrowing or validation before you can safely perform operations on the value. Prefer unknown when the type is not known.

// Void (functions that don't return anything)

function subscribe(message: string): void {
    console.log(message);
}

