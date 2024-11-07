import axios from "axios";

const API_URL = 'http://localhost:9000';

async function httpGetCryptoNews() {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch crypto news");
  }
}

async function httpGetExchangedData(choosenPrimaryCurrency, choosenSecondaryCurrency) {
  const params = {
    from_currency: choosenPrimaryCurrency,
    to_currency: choosenSecondaryCurrency
  };

  try {
    const response = await axios.get(`${API_URL}/currencies`, { params });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch exchange rate");
  }
}

export {
  httpGetCryptoNews,
  httpGetExchangedData
}