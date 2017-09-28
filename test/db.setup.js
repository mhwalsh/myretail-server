const Product = require('../src/models/productSchema');
const testUtils = require('./testUtils');

Product.remove({}, (err, resp) => {
    if (err) {
        console.log(err);
    } else {
        testUtils.createBigLebowski().then((resp)=> {
            testUtils.createDonna().then((resp)=> {
                testUtils.createSpongeBob().then((resp) =>{
                    testUtils.closeConnection();
                });
            });
        });
    }
});