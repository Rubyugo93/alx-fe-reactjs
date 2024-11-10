import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header with inline CSS */}
      <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1>My Favorite Cities</h1>
      </header>

      {/* WelcomeMessage component */}
      <WelcomeMessage />

      {/* MainContent component */}
      <MainContent />

      {/* Display Vite and React logos */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* UserProfile component with inline styling */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography"
      />

      {/* Counter section */}
      <h1 style={{ textAlign: 'center' }}>Vite + React</h1>
      <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button 
          onClick={() => setCount((count) => count + 1)} 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          count is {count}
        </button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs" style={{ textAlign: 'center' }}>
        Click on the Vite and React logos to learn more
      </p>

      {/* Footer component with inline CSS */}
      <Footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#282c34', color: 'white' }} />
    </>
  );
}

export default App;
