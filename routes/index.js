'use strict'

const express = require('express');
const functionsCtr = require('../controller/functions');
const api = express.Router();
api.get('/date', functionsCtr.getDate);
api.get('/fibonacci', functionsCtr.getFibonacci);
module.exports = api;

