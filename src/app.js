const express = require('express');
const app = express();

const mongoose = require('mongoose');

// require routers
const productRouter = require('./routers/product');

mongoose.connect('mongodb://localhost:27017/productDb');

app.set('port', 3003);

app.use('/product', productRouter);

app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});