const Product = require('./src/models/productSchema');
const testUtils = require('./test/testUtils');
/**
 * Quick script to run to generate a few dummy records. 
 * Uses Product model and TestUtiles module.
 */
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