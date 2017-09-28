const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// require routers
const productRouter = require('./routers/product');

app.set('port', 3003);

app.use(bodyParser.json());

app.use('/product', productRouter);

app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});