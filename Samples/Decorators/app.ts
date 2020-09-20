//#region Decorators - Meta-Programming

// enable: "experimentalDecorators"

function Logger(ctor: Function) {
    console.log('Logging...');
    console.log(ctor);
}

@Logger
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const person = new Person();
console.log(person);

//#endregion

//#region Decorator Factories

function Logger2(logString: string) {
    console.log('Logger2 Decorator');

    return function(ctor: Function) {
        console.log('Executing Logger2 Decorator');

        console.log(`${logString}`);
        console.log(ctor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('WithTemplate Decorator');

    return function(constructor: any) {
        console.log('Executing WithTemplate Decorator');
        const element = document.getElementById(hookId);
        const p = new constructor();
        if (element) {
            element.innerHTML = template;
            element.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger2('Logging2...')
@WithTemplate('<h1>Hello Decorator</h1>', 'app')
class AnotherPerson {
    name = 'Bob';

    constructor() {
        console.log('Creating another person object...');
    }
}

const person2 = new AnotherPerson();
console.log(person2);

//#endregion

function PropertyDecorator(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log('target -> ', target);
    console.log('propertName -> ', propertyName);
}

function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator');
    console.log('target -> ', target);
    console.log('name -> ', name);
    console.log('descriptor -> ', descriptor);
}

function MethodDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log('target -> ', target);
    console.log('name -> ', name);
    console.log('descriptor -> ', descriptor);
}

function ParameterDecorator(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator');
    console.log('target -> ', target);
    console.log('name -> ', name);
    console.log('position -> ', position);
}

class Product {
    @PropertyDecorator
    title: string;
    private _price: number;

    @AccessorDecorator
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @MethodDecorator
    getPriceWithTax(@ParameterDecorator tax: number) {
        return this.price * (1 + tax);
    }
}

//#region Returning a Class in a Class Decorator

function WithTemplate2(template: string, hookId: string) {
    console.log('WithTemplate2 Decorator');

    // Run when Class is instantiated
    return function<T extends {new(...args: any[]): { name: string }}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Executing WithTemplate2 Decorator');
                const element = document.getElementById(hookId);
                if (element) {
                    element.innerHTML = template;
                    element.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

@WithTemplate2('<h1>Hello Decorator</h1>', 'app')
class ThirdPerson {
    name = 'Alice';

    constructor() {
        console.log('Creating another person object...');
    }
}

const person3 = new ThirdPerson();
console.log(person3);

//#endregion

//#region an "Autobind" Decorator Example

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this); // this here refers to whatever that triggers the getter method, which is the object
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works';

    @Autobind
    showmessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showmessage); // -> undefined if without decorator
// button.addEventListener('click', p.showmessage.bind(p)); // -> bind to p without decorator

//#endregion

//#region Validation with Decorator

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['required']
    };
}

function PositiveNumber(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

console.log('registeredValidators -> ', registeredValidators);

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Invalid input please try again.');
        return;
    }

    console.log('createdCourse -> ', createdCourse);
});

//#endregion
