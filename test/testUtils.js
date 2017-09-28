const Product = require('../src/models/productSchema');
const mongoose = require('mongoose');

class TestUtils {

    dropData() {
        return Product.remove({});
    }

    createBigLebowski() {
        let big = new Product({
            product_id: 13860428,
            value: '19.98',
            currency_code: 'USD'
        });
        return big.save();
    }

    createDonna() {
        let donna = new Product({
            product_id: 13860432,
            value: '23.57',
            currency_code: 'USD'
        });
        return donna.save();
    }

    createSpongeBob() {
        let bob = new Product({
            product_id: 13860429,
            value: '24.00',
            currency_code: 'USD'
        });
        return bob.save();
    }

    closeConnection() {
        mongoose.connection.close();
    }
}

module.exports = new TestUtils();