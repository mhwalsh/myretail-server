const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird'); // set up promise library

/**
 * ProductSchema creates a simple schema for the products and their properties
 * that are stored in the local database. This file also manages the database 
 * connection. 
 */

 // connect to the database, either locally or on mLabs if the env varilable is set
if(process.env.MONGODB_URI !== undefined) {
    console.log('env connection string');
    connectionString = process.env.MONGODB_URI;
} else {
    connectionString = 'mongodb://localhost:27017/productDb';
}

mongoose.connect(connectionString);

// define a schema for the local product values
let productSchema = new Schema({
    product_id: {type: 'number', require: true, unique: true},
    value: 'number', 
    currency_code: {type: 'string', uppercase: true}
});

// export the model, so it can be use elsewhere in the project to interate with database
module.exports = mongoose.model('Product', productSchema);


