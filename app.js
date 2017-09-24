const express = require('express');
const app = express();
const request = require('request');

const options = {
    url: 'http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics',
    headers: {
        'User-Agent': 'request',
    }
};

// 13860428 the big Lebowski
// 13860429 - sponge bob
// 13860432 - donna reed show
request(options, (error, response, body) => {
    console.log('body ->', JSON.parse(body).product.item.product_description.title);
});


app.set('port', 3003);
app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});