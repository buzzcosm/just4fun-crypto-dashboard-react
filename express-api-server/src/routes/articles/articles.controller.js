// articles.controller.js
const { getCryptoNews } = require("../../models/articles.model");

function httpGetCryptoNews(req, res) {
  getCryptoNews()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

module.exports = {
  httpGetCryptoNews,
};
