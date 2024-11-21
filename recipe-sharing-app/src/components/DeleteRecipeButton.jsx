// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      alert('Recipe deleted!');
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#FF4C4C', color: '#fff' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
