const express = require('express');
const { httpGetExchangedData } = require('./currencies.controller');

const currenciesRouter = express.Router();

currenciesRouter.get('/', httpGetExchangedData);

module.exports = currenciesRouter;