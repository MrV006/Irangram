
/**
 * App Configuration
 * This file centralizes connection settings. 
 * Switch `USE_REAL_SERVER` to true when you have a Node.js/Python backend ready.
 */

export const CONFIG = {
  // Toggle this to switch between Gemini Direct API (Client-side) and Real Server
  USE_REAL_SERVER: false, 

  // Your Backend URL (e.g., http://localhost:5000 or https://api.mydomain.com)
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  
  // Socket URL for real-time features
  SOCKET_URL: process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000',

  // Gemini API Key (Only used if USE_REAL_SERVER is false)
  GEMINI_API_KEY: process.env.API_KEY,
  
  // App Info
  APP_NAME: 'گمی‌گرام',
  VERSION: '1.6.0'
};

export const ENDPOINTS = {
  LOGIN: '/auth/login',
  MESSAGES: '/messages',
  CONTACTS: '/contacts',
  UPLOAD: '/upload'
};