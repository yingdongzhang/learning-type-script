//#region object

const person: {
    name: string;
    age: number;
} = {
    name: 'Alex',
    age: 30
};

// let TS infer the type

const alex = {
    name: 'Alex',
    age: 30
};

console.log(alex.name);
// console.log(alex.fullname); // error TS2339: Property 'fullname' does not exist on type '{ name: string; age: number; }'.

/**
 * Nested Object
 */

const product = {
    id: '123',
    price: 12.99,
    tags: ['sales', 'new'],
    details: {
        title: 'Apple Computer',
        description: 'Great price'
    }
}

console.log(product.details.title);

//#endregion

//#region Array
const hobbies = ['Sports', 'Cooking'];

let activities: string[];
// activities = [1, '3']; // Type 'number' is not assignable to type 'string'.ts(2322)

for (const hobby of hobbies) {
    console.log(hobby.toUpperCase());
}
//#endregion

//#region Tuple

const role: [number, string] = [2, 'author'];
role.push(1);
role.push('admin');

console.log(role);

//#endregion

//#region Enums

enum Role {
    ADMIN = 'Admin',
    READ_ONLY = 'Read Only',
    MANAGER = 'Manager'
};

console.log(Role.ADMIN);
console.log(Role.MANAGER);
console.log(Role.READ_ONLY);

//#endregion