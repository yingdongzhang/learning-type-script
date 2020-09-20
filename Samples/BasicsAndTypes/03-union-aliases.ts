function combine(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

console.log(combine(12, 13, 'as-number'));
console.log(combine('Hello', 'World', 'as-text'));

// resultType: Literal Type

//#region Type Aliases
type Combinable = number | string;
type ResultType = 'as-number' | 'as-text';
//#endregion

function combine2(input1: Combinable, input2: Combinable, resultType: ResultType) {
    return combine(input1, input2, resultType);
}

console.log(combine2(4, 5, 'as-number'));
console.log(combine2('Good', 'Bye', 'as-text'));

type User = { name: string, age: number };

function greet(user: User) {
    console.log('Hello ' + user.name);
}

greet({ name: 'Alice', age: 20 });
