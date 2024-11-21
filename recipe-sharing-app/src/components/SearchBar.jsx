// src/components/SearchBar.jsx

import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm in Zustand store
      />
    </div>
  );
};

export default SearchBar;
