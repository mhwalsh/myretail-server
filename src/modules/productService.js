const rp = require('request-promise');
const buildUrl = require('./urlFormatter');
const isValidId = require('../modules/idValidator');
require('dotenv').config();

/**
 * ProductService is a singleton that can be required into other 
 * modules to interact with the external product service. 
 */
class ProductService {

    constructor() {
        this.url = process.env.EXTERNAL_URL;
        this.options = {
            headers: {
                'User-Agent': 'request',
                'Content-Type': 'application/json'
            }
        }
    }

    /**
     * getProductNameById takes a product id, validates it is numeric,
     * requests data with it from an external service, and returns it
     * @param prodId 
     */
    getProductNameById(prodId) {

        // check id is all numeric
        if (isValidId(prodId)) {
            let newURL = buildUrl(this.url, parseInt(prodId));
            return rp(newURL, this.options).then((resp) => {
                return JSON.parse(resp).product.item.product_description.title;
            }).catch((err) => {
                // otherwise bubble up
                throw err;
            });
        } else {
            throw new Error('invalid product id');
        }
    }
}

module.exports = new ProductService();