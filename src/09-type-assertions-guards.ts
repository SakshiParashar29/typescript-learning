// Type assertions -> In TypeScript, type assertion means telling TypeScript what type you believe a value is.

let someValue: unknown = "Hello, I am Hope!";

let len : number = (someValue as string).length;
// OR
let len2 : number = (<string> someValue).length;


// Type guards -> In TypeScript, type guards are checks that help us determine the actual type of a value before using it.

// A type guard is a condition or function that narrows a variable's type within a particular scope, allowing TypeScript to perform type-safe operations.

function processValue(value: string | number) {
    if(typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else{
        console.log(value.toFixed(2));
    }
}

// Instanceof type guard

class Dog {
    bark () {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if(animal instanceof Dog){
        animal.bark();
    } else {
        animal.meow();
    }
}

