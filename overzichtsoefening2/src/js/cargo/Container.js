"use strict";
// naam:
import Product from './Product';

export default class Container {

    constructor(maxWeight) {
        if (typeof maxWeight != 'number' || maxWeight <= 0) {
            throw new Error('maxWeight must be a number greater than 0!');
        }
        this._maxWeight = maxWeight;
        this._products = [];
    }


    addProduct(product) {
        let sum = product.weight;
        this._products.forEach(element => sum += element.weight);
        let isIdUsed = this._products.some(element => element.id === product.id);
        if (!(product instanceof Product)) {
            throw new Error("the product argument isn't an instance of Product!");
        }
        else if(isIdUsed) {
            throw new Error('the container already contains a product with the same id');
        }
        else if(sum >= this._maxWeight) {
            throw new Error('you can\'t add this product. The maxWeight of the container would be exceeded by adding this product');
        }
        this._products.push(product);
    }


    getProductAtIndex(index) {
        if (!(Number.isInteger(index)) || index < 0 || index >= this._products.length) {
            throw new Error("index must be an integer greater than 0 and smaller than the length of the _products array");
        }
        return this._products[index];
    }
}
