import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Optional: Global styles
import App from './App.jsx';  // Import the main App component

// Find the root element in the HTML and render the React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  // Render the App component inside StrictMode for development checks
  </StrictMode>
);

