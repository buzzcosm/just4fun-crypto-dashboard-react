const express = require('express');
const { httpGetCryptoNews } = require('./articles.controller');

const articlesRouter = express.Router();

articlesRouter.get('/', httpGetCryptoNews);

module.exports = articlesRouter;