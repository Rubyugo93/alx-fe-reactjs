import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === id));
  
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients.join(', ') || '');
  const [instructions, setInstructions] = useState(recipe?.instructions || '');
  
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      title,
      description,
      ingredients: ingredients.split(','),
      instructions,
    };

    updateRecipe(id, updatedRecipe);
    navigate(`/recipe/${id}`);
  };

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma separated)"
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
