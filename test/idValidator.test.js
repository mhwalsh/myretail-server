const expect = require('chai').expect;
const isValidId = require('../src/modules/idValidator');
/**
 * Tests for src/modules/idValidator.js
 */
describe('isValidId module', () => {
    it('should return true when passed string of all numeric characters', () => {
        expect(isValidId('1234354')).to.be.true;
    });

    it('should return true when passed an integer', () => {
        expect(isValidId('1234354')).to.be.true;
    });

    it('should return false if passed string with any non numeric characters', () => {
        expect(isValidId('234%e4')).to.be.false;
    });
});