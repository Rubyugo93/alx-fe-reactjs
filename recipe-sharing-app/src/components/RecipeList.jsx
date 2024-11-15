// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import RecipeCard from './RecipeCard';  // Assuming a RecipeCard component exists to display a single recipe

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  // Optionally, you can trigger filtering when the component is mounted or updated
  useEffect(() => {
    // Re-filter recipes if needed when the component is first loaded or after state updates
  }, [filteredRecipes]);

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
