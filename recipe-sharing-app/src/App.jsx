// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Recipe Sharing Application</h1>
        
        {/* The SearchBar is part of the global layout */}
        <SearchBar />
        
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Main page showing recipes */}
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Add new recipe */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
