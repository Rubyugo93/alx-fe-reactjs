import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: '1rem', padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: '#fff' }}>
        Save
      </button>
    </form>
  );
};

export default EditRecipeForm;
