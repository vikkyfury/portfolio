#!/bin/bash

echo "🚀 Starting AI Portfolio Development Servers..."

# Start React app in background
echo "📱 Starting React app on port 3000..."
npm start &
REACT_PID=$!

# Wait a moment for React to start
sleep 3

# Start Express server in background
echo "🤖 Starting Express server on port 3001..."
npm run server &
SERVER_PID=$!

echo "✅ Both servers are starting..."
echo "📱 React app: http://localhost:3000"
echo "🤖 API server: http://localhost:3001"
echo "💬 Chatbot API: http://localhost:3001/api/chat"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $REACT_PID 2>/dev/null
    kill $SERVER_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait 