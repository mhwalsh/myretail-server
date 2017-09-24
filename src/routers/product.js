const router = require('express').Router();
const Product = require('../modules/productSchema');

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
    Product.find({ product_id: req.params.id }, (err, product) => {
        console.log(product);
        res.send(product);
    });
});

module.exports = router;