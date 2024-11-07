// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { CORS_ORIGIN } = require('./config');

const articlesRouter = require('./routes/articles/articles.router');
const currenciesRouter = require('./routes/currencies/currencies.router');

const app = express();

app.use(cors({
  origin: CORS_ORIGIN
}));
app.use(morgan('combined'));
app.use(express.json());

app.use('/articles', articlesRouter);
app.use('/currencies', currenciesRouter);

module.exports = app;