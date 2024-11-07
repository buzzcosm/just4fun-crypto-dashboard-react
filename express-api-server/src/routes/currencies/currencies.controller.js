
// currencies.controller.js
const { getExchangedData } = require("../../models/currencies.model");

function httpGetExchangedData(req, res) {
  const fromCurrency = req.query.from_currency;
  const toCurrency = req.query.to_currency;

  if (!fromCurrency || !toCurrency) {
    return res.status(400).json({ error: 'Missing required parameter \'from_currency\' or \'to_currency\'' });
  }

  if (fromCurrency.length !== 3 || toCurrency.length !== 3) {
    return res.status(400).json({ error: 'Invalid currency code' });
  }

  getExchangedData(fromCurrency, toCurrency)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

module.exports = {
  httpGetExchangedData
}