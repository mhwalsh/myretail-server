const request = require('request');
const Product = require('../src/models/productSchema');
const mongoose = require('mongoose');

console.log('start script')
let url = 'http://localhost:3003/product'

// Big Lebowski
request.post(url,
    {
        json: {
            id: 13860428,
            value: '19.98',
            currency_code: 'USD'
        }
    },
    (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

// Sponge Bob
request.post(url,
    {
        json: {
            id: 13860429,
            value: '14.00',
            currency_code: 'USD'
        }
    },
    (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

// Donna reed show
request.post(url,
    {
        json: {
            id: 13860432,
            value: '23.57',
            currency_code: 'USD'
        }
    },
    (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

// mongoose.connection.close();