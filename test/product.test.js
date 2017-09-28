const expect = require('chai').expect;
const request = require('request');
const buildUrl = require('../src/modules/urlFormatter');
const testUtils = require('./testUtils');
require('dotenv').config();

/**
 * Test for ProductRouter or src/routers/product.js
 */

const url = process.env.LOCAL_URL;

describe('ProductRouter', () => {
    describe('get product by id route happy path', () => {
        before(() => {
            testUtils.dropData().then(() => {
                testUtils.createBigLebowski();
            });
        });

        after(() => {
            testUtils.dropData().then(() => {
                testUtils.closeConnection();
            });
        });

        it('should return an object with the expected properties when passed a valid id', (done) => {
            request(buildUrl(url, 13860428), (error, response, body) => {
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
            request(buildUrl(url, 13860428), (error, response, body) => {
                expect(error).to.be.null;

                expect(response.statusCode).to.equal(200);

                done();
            });
        });
    });

    describe('get product by id route error cases', () => {
        // no befores or afters because these tests do not require local db to have data
        it('should error nicely if product exists externally, but not locally', (done)=>{
            request(buildUrl(url, 13860428), (error, response, body) => {
                expect(error).to.be.null;
                expect(JSON.parse(body).message).to.contain('Error querying local database');
                expect(response.statusCode).to.equal(404);
    
                done();
            });
        });

        it('should send 404 if non numeric value given', (done) => {
            request(buildUrl(url, 'e353se3'), (error, response, body) => {
                expect(error).to.be.null;
                expect(JSON.parse(body).message).to.contain('invalid product id type or format');
                expect(response.statusCode).to.equal(404);
    
                done();
            });
        });
    });
});