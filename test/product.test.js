const expect = require('chai').expect;
const request = require('request');

const url = 'http://localhost:3003/product/13860428';

describe('ProductRouter', () => {
    describe('get product by id route', () => {

        it('should return an object with the expected properties when passed a valid id', (done) => {
            request(url, (error, response, body) => {
                expect(error).to.be.null;

                // parse body to js object
                let parsedBody = JSON.parse(body);
                expect(parsedBody).to.have.own.property('id');
                expect(parsedBody).to.have.own.property('name');
                expect(parsedBody).to.have.own.property('value');
                expect(parsedBody).to.have.own.property('currency_code');

                done();
            });
        });

        it('should return a status code of 200 when passed a valid id', (done) => {
            request(url, (error, response, body) => {
                expect(error).to.be.null;

                expect(response.statusCode).to.equal(200);
                
                done();
            });
        });
    });
});
