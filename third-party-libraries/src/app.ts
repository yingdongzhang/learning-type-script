import _ from 'lodash';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import Product from './product.model';

declare var GLOBAL: any;

const result = _.shuffle([1, 2, 3, 4]);
console.log(result);

console.log(GLOBAL);

const p1 = new Product('A book', 12.99);
console.log(p1.getInformation());

//#region class transformer
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Table', price: 59.99 },
    { title: 'A Chair', price: 25.99 }
];

const loadedProducts = plainToClass(Product, products);
console.log('loadedProducts -> ', loadedProducts);

//#endregion

//#region class validator

const invalidProduct = new Product('', -12.99);
validate(invalidProduct).then(result => {
    console.log('validation result -> ', result);
});

//#endregion