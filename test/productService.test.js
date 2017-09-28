const expect = require('chai').expect;
const nock = require('nock');
const productService = require('../src/modules/productService');

describe('ProductService', () => {

    before(() => {
        // before ProductService disable http request
        // to prevent calls to external service and 
        // reliably use nock to intercept requests
        nock.disableNetConnect();
    });

    describe('#getProductNameById() happy path', () => {
        beforeEach(() => {
            nock('http://redsky.target.com')
                .get('/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics')
                .reply(200, {
                    product: {
                        item: {
                            product_description: {
                                title: 'The Big Lebowski'
                            }
                        }
                    }
                });
        });

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
    });

    describe('#getProductNameById() bad id error validation', () => {
        beforeEach(() => {
            nock('http://redsky.target.com')
                .get('/v2/pdp/tcin/123?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics')
                .replyWithError('invalid product id');
        });

        it('should error nicely when called with non existent id', (done) => {
            productService.getProductNameById(123).catch((err) => {
                expect(err.message).to.contain('invalid product id');
                done();
            });
        });

        it('should error nicely when called with improperly formatted id', () => {
            try {
                productService.getProductNameById('3860%e428');
            } catch (err) {
                expect(err.message).to.contain('invalid product id');
            }
        });
    });
});