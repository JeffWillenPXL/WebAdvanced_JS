"use strict";
// naam
export default class Product {

    constructor(id, weight) {
        if (!(Number.isInteger(id)) || id <= 0) {
            throw new Error("id must be an integer greater than 0!");
        }
        if (typeof weight != 'number' || weight <= 0) {
            throw new Error("weight must be a number greater than 0!");
        }
        this._id = id;
        this._weight = weight;
    }


    get id() {
        return this._id;
    }

    get weight() {
        return this._weight;
    }
}
