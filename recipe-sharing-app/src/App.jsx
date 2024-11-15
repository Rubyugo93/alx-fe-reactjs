// src/App.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

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
      
      {/* Recipe list */}
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes available!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      )}

      {/* Displaying favorite recipes */}
      <FavoritesList />

      {/* Displaying personalized recommendations */}
      <RecommendationsList />
    </div>
  );
};

export default App;
