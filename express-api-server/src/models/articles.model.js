// articles.model.js
const { REACT_APP_RAPID_API_KEY } = require("../config");
const axios = require("axios");

async function getCryptoNews() {
  const options = {
    method: "GET",
    url: "https://crypto-news-live9.p.rapidapi.com/news/CryptoNews",
    headers: {
      "x-rapidapi-key": REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": "crypto-news-live9.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch crypto news: ${error.message}`);
  }
}

module.exports = {
  getCryptoNews,
};
