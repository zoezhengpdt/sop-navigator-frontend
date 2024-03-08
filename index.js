// A HellowWorld example in Node.js
// Run: node index.js
// Output: Hello World!

// Import needed modules
const http = require('http');

// function to start server and respond with Hello World
function startServer() {
    const port = 8000
    let server = http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello World\n');
    });
    server.listen(port);

    // log message to console
    console.log('Server running at http://localhost:' + port + '/');

    // return server variable
    return server;
}

// export function to create server if used as module
module.exports = startServer;