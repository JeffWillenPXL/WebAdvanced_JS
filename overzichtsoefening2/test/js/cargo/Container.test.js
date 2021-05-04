import Product from '../../../src/js/cargo/Product';
import Container from '../../../src/js/cargo/Container';

let container = new Container(100);
let product1 = new Product(1, 50);
container.addProduct(product1)

describe('addProduct', () => {
    it('should throw an error when the product isn\'t an instance of product', () => {
        expect(() => container.addProduct("test")).toThrow();
    })
    it('should throw an error when the _products array already contains a product with the same id', () => {
        let product2 = new Product(1, 50);
        expect(() => container.addProduct(product2)).toThrow();
    })
    it('should throw an error when adding a product exceeds the maxWeight of the container', () => {
        let product3 = new Product(2, 200);
        expect(() => container.addProduct(product3)).toThrow();
    })
})

