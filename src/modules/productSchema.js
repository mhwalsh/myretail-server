const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/productDb');

let productSchema = new Schema({
    product_id: {type: 'number', require: true, unique: true},
    value: 'number', 
    currency_code: {type: 'string', uppercase: true}
});

module.exports = mongoose.model('Product', productSchema);


