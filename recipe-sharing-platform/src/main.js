import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import Tailwind CSS

import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

// Define the App component
const App = () => {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1 className="text-blue-500">Hello Vite!</h1> {/* Tailwind class to make the text blue */}
      <div className="card">
        <button id="counter" type="button"></button>
      </div>
      <p className="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  );
};

// Render the App component into the DOM
ReactDOM.createRoot(document.getElementById('app')).render(<App />);

// Set up the counter (assuming you have the setupCounter function)
setupCounter(document.querySelector('#counter'));
