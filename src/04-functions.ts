
// Basic function with types

function add(a: number, b: number): number {
    return a + b;
}

// Optional Parameter (use ? for marking optional)

function greet(name: string, greeting?: string): string {
    if(greeting) 
        return `${greeting}, ${name}!`

    return `Hello, ${name}!`;
}

// Rest Parameters
function sum(...numbers: number[]) : number {
    return numbers.reduce((total, n) => total + n, 0);
}

// Arrow functions
const divide = (a: number, b: number): number => a/b;

// Function types
let calculate: (x: number, y: number) => number
calculate = add;