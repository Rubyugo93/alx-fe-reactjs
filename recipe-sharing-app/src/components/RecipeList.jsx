// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 style={{ color: '#444' }}>Recipes</h2>
      {recipes.length === 0 ? (
        <p style={{ color: '#888' }}>No recipes available. Add some!</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '1rem',
                marginBottom: '1rem',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
