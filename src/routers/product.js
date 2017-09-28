const router = require('express').Router();
const Product = require('../models/productSchema');
const productService = require('../modules/productService');
const isValidId = require('../modules/idValidator');

router.get('/:id', (req, res) => {
    console.log('in get product by id route');

    if (!isValidId(req.params.id)) {
        res.status(404).send({ message: 'Error invalid product id type or format' });

    } else {
        let productId = parseInt(req.params.id);

        productService.getProductNameById(productId).then((externalProd) => {
            Product.findOne({ product_id: productId }, (err, localProd) => {

                // product id exists in external service, but failed to query local db
                if (err) {
                    res.status(404).send({ message: 'Error querying local database' });
                }

                let productComposite = {
                    id: productId,
                    name: externalProd,
                    value: localProd.value,
                    currency_code: localProd.currency_code
                }
                res.status(200).send(productComposite);
            });
        }).catch((err) => {

            // 404 from external service
            if (err.statusCode === 404) {
                res.status(404).send({ message: 'Error invalid product id' });
            } else {
                // external service is down or other issue
                console.log(err);
                res.sendStatus(500);
            }
        });
    }
});

module.exports = router;