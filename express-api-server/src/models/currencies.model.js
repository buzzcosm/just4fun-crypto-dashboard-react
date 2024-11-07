// currencies.model.js
const axios = require("axios");
const { REACT_APP_RAPID_API_KEY } = require('../config');

// Utility function for currency code validation
function isValidCurrencyCode(code) {
  return typeof code === 'string' && code.length === 3;
}

async function getExchangedData(fromCurrency, toCurrency) {
  if (!fromCurrency || !toCurrency) {
    throw new Error('Missing required parameter \'from_currency\' or \'to_currency\'');
  }

  if (!isValidCurrencyCode(fromCurrency) || !isValidCurrencyCode(toCurrency)) {
    throw new Error('Invalid currency code. Must be 3 characters long like \'BTC\'.');
  }

  if (!REACT_APP_RAPID_API_KEY) {
    throw new Error('API key is missing. Ensure REACT_APP_RAPID_API_KEY is set in the environment variables.');
  }

  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      from_currency: fromCurrency,
      function: 'CURRENCY_EXCHANGE_RATE',
      to_currency: toCurrency
    },
    headers: {
      'x-rapidapi-key': REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;

    if (
      !data ||
      !data["Realtime Currency Exchange Rate"] ||
      !data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
    ) {
      throw new Error('Unexpected API response format.');
    }

    return {
      primaryCurrency: fromCurrency,
      secondaryCurrency: toCurrency,
      exchangeRate: data["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
    };
  } catch (error) {
    console.error(`Error fetching exchange rate from ${fromCurrency} to ${toCurrency}:`, error.message);
    throw new Error(`Failed to fetch exchange rate: ${error.message}`);
  }
}

module.exports = {
  getExchangedData
}