//#region Generics

const names: Array<string> = [];
const anything: Array<any> = [];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done')
    }, 2000);
});

promise.then(data => {
    console.log(data.toUpperCase()); // TypeScript knows that this is a string type
});

//#endregion

//#region Generic Function

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports', 'Music']}, { age: 30 });
console.log('mergedObj -> ', mergedObj);

// merge('23', 12); // error TS2345: Argument of type '"23"' is not assignable to parameter of type 'object'.

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value.';
    if (element.length === 1) {
        description = 'Got 1 element.';
    } else if (element.length > 1) {
        description = `Got ${element.length} elements.`;
    }
    return [element, description];
}

console.log(countAndDescribe('Hello world!'));
console.log(countAndDescribe(['Sports']));
console.log(countAndDescribe([]));

//#endregion

//#region "keyof" Constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));
// console.log(extractAndConvert({ name: 'Max' }, 'age')); // error TS2345: Argument of type '"age"' is not assignable to parameter of type '"name"'.

//#endregion

//#region Generic Classes

class DataStorage<T extends string | number | boolean> {
    private data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item));
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Mad');
textStorage.addItem('Alice');
textStorage.removeItem('Alice');
console.log('getItems -> ', textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(123);
numberStorage.addItem(456);
console.log('getItems -> ', numberStorage.getItems());

//#endregion

//#region Generic Utility Types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const sports: Readonly<string[]> = ['Run', 'Tennis'];

//#endregion