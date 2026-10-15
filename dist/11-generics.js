"use strict";
// Generics in TS -> In TypeScript, generics allow us to write reusable code that works with different data types while maintaining type safety.
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    return arg;
}
let out1 = identity("Subscribe");
let out2 = identity(100);
// generic with arrays
function getFirstElement(arr) {
    return arr[0];
}
let myNum = getFirstElement([1, 2, 3]);
let myName = getFirstElement(['Hope', 'Piyush']);
;
let stringNumberpair = {
    key: "age",
    value: 27
};
// Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hope");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("Hello");
logLength([1, 2, 3]);
