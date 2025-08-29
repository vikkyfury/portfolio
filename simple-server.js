const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Simple server is running!'
  });
});

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Test endpoint working!', 
    timestamp: new Date().toISOString() 
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio API Server', 
    status: 'running',
    timestamp: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
  console.log(`Health endpoint: http://localhost:${PORT}/api/health`);
});