const router = require('express').Router();
const Product = require('../modules/productSchema');
const productService = require('../modules/productService');

router.get('quickCreate/:id/:value/:currency_code', (req, res) => {
    console.log(req.params);
    let product = new Product({
        product_id: req.params.id,
        value: req.params.value,
        currency_code: req.params.currency_code
    });

    product.save((err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/:id', (req, res) => {
    console.log('in the thign')
    let productId = req.params.id;

    // reliability
    // optimize for speed: cache first, 
    // optimize for accuracy: external service, then to the cache  
    productService.getProductNameById(productId).then((externalProd) => { 
        Product.findOne({ product_id: productId }, (err, localProd) => {
            let productComposite = {
                id: productId,
                name: externalProd,
                value: localProd.value,
                currency_code: localProd.currency_code
            }
            localProd.name = externalProd;
            res.send(productComposite);
        });
    });
});

module.exports = router;