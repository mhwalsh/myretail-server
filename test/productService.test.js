const expect = require('chai').expect;
const productService = require('../src/modules/productService');

describe('ProductService', () => {
    describe('#getProductNameById()', () => {
        it('should return product name if called with a valid id', (done) => {
            // valid id for The Big Lebowski
            productService.getProductNameById(13860428).then((name) => {
                expect(name).to.contain('The Big Lebowski');
                done();
            });
        });

        it('should return product name when called with a valid id of the wrong type', (done) => {
            // valid id for The Big Lebowski
            productService.getProductNameById('13860428').then((name) => {
                expect(name).to.contain('The Big Lebowski');
                done();
            });
        });

        it('should error nicely when called with invalid id', (done) => {
            productService.getProductNameById(123).catch((err) => {
                expect(err.message).to.contain('invalid product id');
                done();
            });
        });
    });
});