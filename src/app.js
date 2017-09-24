const express = require('express');
const app = express();

app.set('port', 3003);

app.listen(app.get('port'), () => {
    console.log('Server is up and listening on port', app.get('port'));
});