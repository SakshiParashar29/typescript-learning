"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    // Getter
    getName() {
        return this.name;
    }
    // setter
    setName(name) {
        this.name = name;
    }
}
// can be written in short format alsos
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let piyush = new Employee(101, "Piyush", "Engineering");
console.log(piyush.getDetails());
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
