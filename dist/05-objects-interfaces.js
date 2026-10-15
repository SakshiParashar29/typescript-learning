"use strict";
// Object type annotation
Object.defineProperty(exports, "__esModule", { value: true });
;
let user = {
    name: "Hope",
    age: 21,
    id: 1
};
;
let laptop = {
    name: "MacBook Pro",
    price: 2000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
