const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Ultra minimal server is running!',
    url: req.url
  }));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Ultra minimal server running on port ${PORT}`);
});