const express = require('express');
const { httpFetchExchangedData } = require('./currencies.controller');

const currenciesRouter = express.Router();

currenciesRouter.post('/', httpFetchExchangedData);

module.exports = currenciesRouter;