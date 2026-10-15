// A type alias in TypeScript allows us to assign a name to any type using the type keyword, making types reusable and easier to maintain. It supports object types, primitive types, union types, intersections, and more.

type Point = {
    x: number,
    y: number
};

let point: Point = {
    x: 10,
    y: 20
};

// Type alias for primitives
type ID = string | number;

let userId: ID = "piyush123";
let productId: ID = 456;


// Type alias VS Interface

// 1. Interfaces can be extended but alias don't 

interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

let myDog: Dog = {
    name: "kittu",
    breed: "Golden Retriever",
    age: 18
}

console.log(myDog);

// 2. Interfaces can be declared multiple times and will merge

interface Animal {
    name: string;
}
interface Animal {
    age: number
}
// here both will merge

// 3. Interfaces usually prefered for object shapes,
// type aliases for unions/intersections

interface User {
    name: string,
    age: number;
}

type UserID = string | number;

