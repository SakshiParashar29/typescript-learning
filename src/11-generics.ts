// Generics in TS -> In TypeScript, generics allow us to write reusable code that works with different data types while maintaining type safety.

function identity<T> (arg: T) : T {
    return arg;
}

let out1 = identity("Subscribe");
let out2 = identity(100);

// generic with arrays
function getFirstElement<T>(arr: T[]) : T | undefined {
    return arr[0];
}

let myNum = getFirstElement([1,2,3]);
let myName = getFirstElement(['Hope', 'Piyush']);

// Generic Interfaces

interface keyValuePair <K, V> {
    key: K,
    value: V
};

let stringNumberpair: keyValuePair<string, number> = {
    key: "age",
    value: 27
}

// Generic classes
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    removeItem(item: T): void {
        this.data = this.data.filter((i) => i !== item);
    }

    getItems(): T[] {
        return [...this.data];
    }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hope");

// Generic constraints
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise> (arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength("Hello");
logLength([1, 2, 3]);

