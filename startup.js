// Simple startup script to ensure dependencies are installed
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting application...');
console.log('Current directory:', process.cwd());
console.log('Files in current directory:', fs.readdirSync('.'));

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('Installing dependencies...');
  try {
    execSync('npm install --production', { stdio: 'inherit' });
    console.log('Dependencies installed successfully');
  } catch (error) {
    console.error('Failed to install dependencies:', error);
  }
}

// Start the main application
console.log('Starting main application...');
require('./index.js');