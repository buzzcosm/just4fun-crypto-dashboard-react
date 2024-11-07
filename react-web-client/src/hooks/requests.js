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

async function httpFetchExchangedData(choosenPrimaryCurrency, choosenSecondaryCurrency) {
  try {
    const response = await axios.post(`${API_URL}/currencies`, { from_currency: choosenPrimaryCurrency, to_currency: choosenSecondaryCurrency });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch exchange rate");
  }
}

export {
  httpGetCryptoNews,
  httpFetchExchangedData
}