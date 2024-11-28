import React from 'react';
import javascriptLogo from './javascript.svg';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascriptLogo} className="logo vanilla" alt="JavaScript logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-blue-500 mt-8">Hello Vite + React!</h1>
      <div className="card mt-4">
        <button
          id="counter"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => alert('Counter button clicked!')}
        >
          Counter
        </button>
      </div>
      <p className="read-the-docs mt-4 text-gray-600">
        Click on the Vite logo to learn more
      </p>
    </div>
  );
};

export default App;
