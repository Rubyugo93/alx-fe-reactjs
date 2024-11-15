// src/App.jsx
import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './recipeStore';

const App = () => {
  // Access the recipes from Zustand store
  const recipes = useRecipeStore(state => state.recipes);

  // Load initial recipes into the store (can be done via API or mock data)
  useEffect(() => {
    // Mock data for demonstration purposes
    useRecipeStore.getState().addRecipe({
      id: 1,
      title: 'Spaghetti',
      description: 'Pasta with tomato sauce',
      ingredients: ['pasta', 'tomato sauce', 'garlic'],
      prepTime: 20
    });
    useRecipeStore.getState().addRecipe({
      id: 2,
      title: 'Salad',
      description: 'Fresh vegetables and dressing',
      ingredients: ['lettuce', 'tomato', 'cucumber', 'dressing'],
      prepTime: 10
    });
    useRecipeStore.getState().addRecipe({
      id: 3,
      title: 'Pancakes',
      description: 'Fluffy pancakes with syrup',
      ingredients: ['flour', 'milk', 'eggs', 'syrup'],
      prepTime: 15
    });
  }, []);

  return (
    <div className="app">
      <h1>Recipe Sharing Application</h1>
      {/* Search Bar to filter recipes */}
      <SearchBar />
      {/* Recipe List that shows filtered recipes based on search */}
      <RecipeList />
    </div>
  );
};

export default App;
