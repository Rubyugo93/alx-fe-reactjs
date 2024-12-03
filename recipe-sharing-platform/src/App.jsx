import React from 'react';
import './index.css';  // Import Tailwind CSS styles

import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

// Define the App component
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-500 mt-8">Hello Vite!</h1> {/* Tailwind class to style the text */}

      <div className="card mt-4">
        <button id="counter" className="px-4 py-2 bg-blue-500 text-white rounded-md" type="button">
          Counter
        </button>
      </div>

      <p className="read-the-docs text-center mt-4 text-gray-700">
        Click on the Vite logo to learn more
      </p>
    </div>
  );
};

// Render the App component into the DOM
export default App;
