import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header'; // Import Header
import MainContent from './components/MainContent'; // Import MainContent
import Footer from './components/Footer'; // Import Footer
import UserProfile from './components/UserProfile'; // Import UserProfile

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Include Header component */}
      <Header />

      {/* Include WelcomeMessage component (render only once) */}
      <WelcomeMessage />

      {/* Include MainContent component */}
      <MainContent />

      {/* Display the Vite and React logos */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Counter button */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Include Footer component */}
      <Footer />
    </>
  );
}

export default App;
