//#region Intersection Types

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

//#endregion

//#region Variation
interface Visitor {
    name: string;
}

interface Manager {
    name: string;
    startDate: Date;
    permissions: string[];
}

interface Staff extends Visitor, Manager {}

const staff1: Staff = {
    name: 'Max',
    permissions: ['open-office-door'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

const result: Universal = 123;

//#endregion

//#region Type Guards

type UnknownStaff = Visitor | Manager;

function printStaffInformation(person: UnknownStaff) {
    console.log(person.name);
    // check if person is a Manager
    if ('permissions' in person) {
        console.log(person.permissions);
    }
    if ('startDate' in person) {
        console.log(person.startDate);
    }
}

const person1: UnknownStaff = {
    name: 'Max',
    permissions: ['open-office-door'],
    startDate: new Date()
}

printStaffInformation(person1);

class Car {
    drive() {
        console.log('Car driving...');
    }
}

class Truck {
    drive() {
        console.log('Truck driving...');
    }

    loadCargo() {
        console.log('Truck loading cargo...')
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo();
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}

useVehicle(v1);
useVehicle(v2);

//#endregion

//#region Distrimited Unions

interface Bird {
    type: 'bird'; // literal type
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'; // literal type
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    switch (animal.type) {
        case 'bird':
            console.log(`Moving with speed: ${animal.flyingSpeed}`);
            break;
        case 'horse':
            console.log(`Moving with speed: ${animal.runningSpeed}`);
            break;
    }
}

moveAnimal({ type: 'bird', flyingSpeed: 123 });
moveAnimal({ type: 'horse', runningSpeed: 123 });

//#endregion

//#region Type Casting

const messageInputElement = <HTMLInputElement>document.getElementById('message-input')!;
messageInputElement.onchange = (e) => {
    console.log(messageInputElement.value);
}

//#endregion

//#region Index Properties

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email'
};

//#endregion

//#region Function Overloads

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const fullName = add('Max', ' Smith');
const names = fullName.split(' ');
console.log(names);
//#endregion

//#region Optional Chaining

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'Chief Executive Office' }
}

console.log(fetchedUserData.job.title);
console.log(fetchedUserData?.contact?.phone?.home);

// Null Coalescing
const userInput = null;
const storedData = userInput ?? 'Default';

//#endregion