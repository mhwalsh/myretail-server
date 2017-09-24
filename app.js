const express = require('express');
const app = express();

const productService = require('./modules/productService');

// 13860428 the big Lebowski
productService.getProductNameById(13860428).then((name)=>{
    console.log('in app.js name', name);
});

// 13860429 - sponge bob
productService.getProductNameById(13860429).then((name)=>{
    console.log('in app.js name', name);
});

// 13860432 - donna reed show
productService.getProductNameById(13860432).then((name)=>{
    console.log('in app.js name', name);
});

app.set('port', 3003);

app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});