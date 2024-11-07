// currencies.model.js
const { REACT_APP_RAPID_API_KEY } = require("../config");
const axios = require("axios");

async function getExchangedData(choosenPrimaryCurrency, choosenSecondaryCurrency) {
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      from_currency: choosenPrimaryCurrency,
      function: 'CURRENCY_EXCHANGE_RATE',
      to_currency: choosenSecondaryCurrency
    },
    headers: {
      'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    const exchangeRateData = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    const exchangedData = {
      primaryCurrency: choosenPrimaryCurrency,
      secondaryCurrency: choosenSecondaryCurrency,
      exchangeRate: exchangeRateData
    }
    return exchangedData;
  } catch (error) {
    throw new Error(`Failed to fetch exchange rate: ${error.message}`);
  }
}

module.exports = {
  getExchangedData
}