const rp = require('request-promise');
const buildUrl = require('./urlFormater');
/**
 * ProductService
 */
class ProductService {

    constructor() {
        this.url = 'http://redsky.target.com/v2/pdp/tcin/PRODUCTID';
        this.options = {
            headers: {
                'User-Agent': 'request',
            }
        }
    }

    getProductNameById(prodId) {
        // type checking here 
        let newURL = buildUrl(this.url, parseInt(prodId));
        return rp(newURL, this.options).then((resp) => {
            return JSON.parse(resp).product.item.product_description.title;
        }).catch((err) => {
            // if 404, send specific error message
            if (err.statusCode === 404) {
                throw new Error('invalid product id');
            
            } else { // otherwise bubble up
                throw (err);
            }
        });
    }
}

module.exports = new ProductService();