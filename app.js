'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //variable app que llama a express
const api = require('./routes');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.options('*', cors());
//const session = require('express-session')

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//middleware Morgan que nos muestra la ruta a la que accedemos por consola y cuanto tarda.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use('/api', api);
// se ingresan las rutas renderizadas
app.get('*', (req, res) => {
    res.end('Ruta no Encontrada');
});

module.exports = app;