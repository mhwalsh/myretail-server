const rp = require('request-promise');
/**
 * ProductService
 */
class ProductService {

    constructor() {
        this.url = 'http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics';
        this.options = {
            headers: {
                'User-Agent': 'request',
            }
        }
    }

    getProductNameById(prodId) {
        return rp(this.url, this.options).then((resp) => {
             return JSON.parse(resp).product.item.product_description.title;
         });
         
    }
}

module.exports = new ProductService();