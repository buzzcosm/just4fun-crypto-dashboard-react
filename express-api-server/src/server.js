// server.js
const http = require('http');
const app = require('./app');
const { PORT } = require('./config');

const server = http.createServer(app);

function startServer() {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();