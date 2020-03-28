const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', [
        'GET',
        'HEAD',
        'OPTIONS',
        'POST',
        'PUT',
        'DELETE',
        'PATCH'
    ]);
    res.setHeader('Access-Control-Allow-Headers', [
        'Authorization',
        'Access-Control-Allow-Headers',
        'Origin',
        'Accept',
        'X-Requested-With',
        'Content-Type',
        'Access-Control-Request-Method',
        'Access-Control-Request-Headers'
    ]);
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);
