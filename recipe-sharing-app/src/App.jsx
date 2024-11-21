// src/App.js

import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing Application</h1>
      <SearchBar /> {/* Added SearchBar here */}
      <AddRecipeForm />
      <RecipeList /> {/* RecipeList will show filtered results */}
    </div>
  );
};

export default App;
