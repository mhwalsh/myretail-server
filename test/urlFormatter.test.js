const expect = require('chai').expect;
const buildUrl = require('../src/modules/urlFormatter');

describe('urlFormatter module', () => {
    it('should replace PRODUCTID in string with given product id', () => {
        expect(buildUrl('a test PRODUCTID string', 1234)).to.equal('a test 1234 string');
    });
});