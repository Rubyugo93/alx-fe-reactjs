import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage'; // Import WelcomeMessage
import Header from './components/Header'; // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer'; // Import Footer component
import UserProfile from './components/UserProfile'; // Import UserProfile component
import Counter from './components/Counter'; // Import Counter component

function App() {
  return (
    <>
      {/* Include Header component */}
      <Header />
      
      {/* Include WelcomeMessage component */}
      <WelcomeMessage />
      
      {/* Include MainContent component */}
      <MainContent />
      
      {/* Include UserProfile component with example props */}
      <UserProfile name=["Alice", "25", "Loves hiking and photography"] />
      ["age=", "bio="] />

      {/* Display Vite and React logos */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Include Counter component */}
      <Counter />

      {/* Include Footer component */}
      <Footer />
    </>
  );
}

export default App;
