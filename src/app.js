const express = require('express');
const app = express();
const productRouter = require('./routers/product');

/**
 * Main server file, sets port, includes the product router, and listens
 */

// set port for either heroku if the env var exist or locally to 3003
app.set('port', process.env.PORT || 3003);

app.use('/product', productRouter);

app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});