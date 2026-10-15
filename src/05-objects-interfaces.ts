// Object type annotation

// An interface in TypeScript defines the structure of an object by specifying its properties and their types. It helps catch type-related mistakes and makes code easier to maintain.

interface User {
    name: string,
    age: number,
    email?: string,
    readonly id: number // readonly property can't get updated
};

let user : User = {
    name: "Hope",
    age: 21,
    id: 1
};

// Interface with Methods
interface Products {
    name: string, 
    price: number,
    getDiscount(percentage: number) : number
};

let laptop : Products = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage: number) : number {
        return this.price * (percentage/100);
    },
};