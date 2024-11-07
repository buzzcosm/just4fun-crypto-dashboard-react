
// currencies.controller.js
const { getExchangedData } = require("../../models/currencies.model");

function httpFetchExchangedData(req, res) {
  const { from_currency, to_currency } = req.body;

  if (!from_currency || !to_currency) {
    return res.status(400).json({ error: 'Missing required parameter \'from_currency\' or \'to_currency\'' });
  }

  if (from_currency.length !== 3 || to_currency.length !== 3) {
    return res.status(400).json({ error: 'Invalid currency code' });
  }

  getExchangedData(from_currency, to_currency)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

module.exports = {
  httpFetchExchangedData
}