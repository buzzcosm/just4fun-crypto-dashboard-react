
// currencies.controller.js
const { getExchangedData } = require("../../models/currencies.model");

function httpGetExchangedData(req, res) {
  const { from_currency: fromCurrency, to_currency: toCurrency } = req.query;

  getExchangedData(fromCurrency, toCurrency)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

module.exports = {
  httpGetExchangedData
}