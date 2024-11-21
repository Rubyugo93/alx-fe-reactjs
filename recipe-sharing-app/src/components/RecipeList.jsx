// src/components/RecipeList.jsx

import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes()); // Get filtered recipes from store

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))
        ) : (
          <p>No recipes found</p> {/* Display this message if no recipes match the search */}
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
