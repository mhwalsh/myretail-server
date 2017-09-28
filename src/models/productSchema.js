const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

if(process.env.MONGODB_URI !== undefined) {
    console.log('env connection string');
    connectionString = process.env.MONGODB_URI;
} else {
    connectionString = 'mongodb://localhost:27017/productDb';
}

mongoose.connect(connectionString);

let productSchema = new Schema({
    product_id: {type: 'number', require: true, unique: true},
    value: 'number', 
    currency_code: {type: 'string', uppercase: true}
});

module.exports = mongoose.model('Product', productSchema);


