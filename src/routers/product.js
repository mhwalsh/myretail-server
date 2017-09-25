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
    // probably should use regex here
    let productId = parseInt(req.params.id);
    console.log(productId)
    // if not a number
    // if has any weird charaters in it
    // positive number
    if(isNaN(productId)){
        res.status(404).send({message: 'Error invalid product id type'});
    }

    // reliability
    // optimize for speed: cache first, 
    // optimize for accuracy: external service, then to the cache  
    productService.getProductNameById(productId).then((externalProd) => {
        Product.findOne({ product_id: productId }, (err, localProd) => {

            // error querying the local db
            // id does exist in the external service, but something went wrong
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
        
        // 404 from external service, id doesn't exist in either system
        if (err.statusCode === 404) {
            res.status(404).send({message: 'Error invalid product id'});            
        } else {
            // external service is down or other issue
            console.log(err);
            res.sendStatus(500);                        
        }
    });
});

module.exports = router;