//#region Interfaces

interface Greetable {
    name: string;
    readonly phone: string;
    greet(phrase: string): void;
}

let user1: Greetable;
user1 = {
    name: 'Alice',
    phone: '1234123',
    greet(phrase: string) {
         console.log(phrase); 
    }
}
user1.greet('Hello');
// user1.phone = '12312'; // error TS2540: Cannot assign to 'phone' because it is a read-only property.

class Person implements Greetable {
    name: string;
    phone: string;

    constructor(name: string, phone: string) {
        this.name = name;
        this.phone = phone;
    }

    greet(phrase: string): void {
        console.log(`${phrase}. I am ${this.name}. My number is ${this.phone}`);
    }
}

const bob = new Person('Bob', '1234');
bob.phone = '1231';
bob.greet('Hello');

//#endregion

//#region Interfaces as Function Types

interface AddFn {
    (n1: number, n2: number): number;
}

let add: AddFn;
add = function (n1: number, n2: number) {
    return n1 + n2;
}

//#endregion

//#region

interface Named {
    readonly name?: string;
    outputName?: string;
}

class Pet implements Named {
    name?: string;
    greet() {
        console.log('Meow');
    }
}

//#endregion