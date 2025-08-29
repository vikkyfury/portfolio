// API Configuration for different environments
const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    // Use environment variable if set, otherwise use Azure App Service URL
    return process.env.REACT_APP_API_URL || 'https://vikas-portfolio-api-dfg2fwenddf0fydf.westus3-01.azurewebsites.net';
  }
  // Development environment
  return 'http://localhost:3001';
};

export const API_BASE_URL = getApiUrl();
export const CHAT_API_URL = `${API_BASE_URL}/api/chat`; 