class Department {
    name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        console.log(`This is the ${this.name} department`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static createSubject(name: string) {
        return { name };
    }
}

const department = new Department('Physics');
console.log('Department ' + department.name);
department.describe();
department.addEmployee('Alice');
department.addEmployee('Bob');
department.printEmployeesInformation();
const englishSubject = Department.createSubject('English');
console.log(englishSubject);

// Shorthand initialization

class Person {
    constructor(private readonly id: string, public readonly name: string) {}

    public getId = () => this.id;
    protected pets: string[] = [];

    /**
     * Getter
     */
    get detail() {
        return `${this.id} - ${this.name}`;
    }

    /**
     * Setter
     */
    set favouritePet(pet: string) {
        this.pets = [];
        this.pets.push(pet);
    }

    protected addPets(pet: string) {
        this.pets.push(pet);
    }

    public getPets() {
        console.log(this.pets);
    }
}

const alice = new Person('1234', 'Alice');
console.log(`${alice.getId()} - ${alice.name}`);

//#region Inheritance

class Student extends Person {
    constructor(id: string, public subjects: string[]) {
        super(id, 'Bob');
    }

    addPets(pet: string) {
        if (pet !== 'dog' && pet !== 'cat') {
            console.log('Only dog and cat are allowed.');
            return;
        }
        this.pets.push(pet);
    }
}

const studentBob = new Student('123-bob', ['Math', 'English', 'Art']);
console.log(studentBob.detail);
console.log(studentBob.subjects);
studentBob.addPets('dog');
studentBob.addPets('goat');
studentBob.getPets();
studentBob.favouritePet = 'cat';
studentBob.getPets();

//#endregion

//#region Abstract class

abstract class Vehicle {
    abstract describeFuel(): string;
    abstract addFuel(fuelType: string): void;
}

class Car extends Vehicle {
    describeFuel(): string {
        return '#93, #95, #98';
    }
    addFuel(fuelType: string): void {
        console.log(`Fuel ${fuelType} added!`);
    }
}

//#endregion

//#region Singletons & Private Constructor

class Moon {
    private constructor() {}
    private static instance: Moon;

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Moon();
        return this.instance;
    }

    public describeGravity() {
        console.log('Gravity on Moon -> 1.62 m/s²');
    }
}

const moon = Moon.getInstance();
moon.describeGravity();

//#endregion
