//#region number

function add(n1: number, n2: number) {
    console.log(typeof(n1));
    return n1 + n2;
}

const number1 = 5;
// const number1 = '5'; // error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
const number2 = 2.8;

let result = add(number1, number2);
console.log('result -> ', result);

//#endregion

//#region boolean

function startCar(hasFuel: boolean) {
    if (hasFuel) {
        console.log('Running...');
    } else {
        console.log('You need to add fuel!');
    }
}

startCar(true);
startCar(false);
// startCar('hi'); // error TS2345: Argument of type '"hi"' is not assignable to parameter of type 'boolean'

//#endregion
