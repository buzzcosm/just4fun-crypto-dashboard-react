// config.js
require('dotenv').config();

const config = {
    PORT: process.env.PORT || 9000,
    CORS_ORIGIN: 'http://localhost:3000',
    REACT_APP_RAPID_API_KEY: process.env.REACT_APP_RAPID_API_KEY
};

module.exports = config;