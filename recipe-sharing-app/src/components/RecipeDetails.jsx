import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      <Link to="/" style={{ marginTop: '1rem', display: 'block', textDecoration: 'none', color: 'blue' }}>
        Back to Recipe List
      </Link>
    </div>
  );
};

export default RecipeDetail;
