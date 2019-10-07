// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;

// app.listen(port);

// console.log('RESTful API server started on: ' + port);

'use strict'

const app = require('./app');
const config = require('./config');
    console.log('Conexión establecida...');
    app.listen(config.port, () => {
        console.log(`Api Rest Corriendo en http://localhost:${config.port}`)
    });

