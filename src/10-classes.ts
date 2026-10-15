class Person {
    private name: string;
    protected age: number;
    public email: string;

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Methods
    public introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    // Getter
    public getName(): string {
        return this.name;
    }

    // setter
    public setName(name: string): void {
        this.name = name;
    }
}

// can be written in short format alsos
class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string,
    ){}

    getDetails(): string {
        return `${this.name} works in ${this.department}`;
    }
}

let piyush = new Employee(101, "Piyush", "Engineering");
console.log(piyush.getDetails());

class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamSize: number,
    ) {
        super(id, name, department);
    }

    getTeamInfo(): string {
        return `${this.name} manages ${this.teamSize} people`;
    }
}

