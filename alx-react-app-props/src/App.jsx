// src/App.jsx
import React from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage'; // Import WelcomeMessage
import Header from './components/Header'; // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer'; // Import Footer component
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import Counter from './components/Counter'; // Import Counter component
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
  return (
    <UserProvider>
      {/* Include Header component */}
      <Header />
      
      {/* Include WelcomeMessage component */}
      <WelcomeMessage />
      
      {/* Include MainContent component */}
      <MainContent />
      
      {/* Include ProfilePage component */}
      <ProfilePage />
      
      {/* Display Vite and React logos */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="/assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Include Counter component */}
      <Counter />

      {/* Include Footer component */}
      <Footer />
    </UserProvider>
  );
}

export default App;
