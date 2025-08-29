const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (req.url === '/api/health') {
    res.end(JSON.stringify({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      message: 'Minimal server is running!'
    }));
  } else {
    res.end(JSON.stringify({ 
      message: 'Minimal server is running!', 
      timestamp: new Date().toISOString() 
    }));
  }
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Minimal server running on port ${PORT}`);
});