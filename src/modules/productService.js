const rp = require('request-promise');
/**
 * ProductService
 */
class ProductService {

    constructor() {
        this.url = 'http://redsky.target.com/v2/pdp/tcin/PRODUCTID?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics';
        this.options = {
            headers: {
                'User-Agent': 'request',
            }
        }
    }

    getProductNameById(prodId) {
        // type checking here 
        let newURL = this.url.replace(/PRODUCTID/g, parseInt(prodId));
        return rp(newURL, this.options).then((resp) => {
            return JSON.parse(resp).product.item.product_description.title;
        }).catch((err) => {
            // if 404, send specific error message
            if (err.statusCode === 404) {
                throw new Error(err, 'invalid product id');
            
            } else { // otherwise bubble up
                throw (err);
            }
        });
    }
}

module.exports = new ProductService();