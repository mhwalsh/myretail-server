const express = require('express');
const app = express();

const productService = require('./modules/productService');

productService.getProductNameById(123).then((name)=>{
    console.log('in app.js name', name);
});

app.set('port', 3003);

app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});