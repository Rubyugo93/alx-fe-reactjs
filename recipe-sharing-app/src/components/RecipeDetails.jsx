import { useRecipeStore } from '../recipeStore';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === id));
  const navigate = useNavigate();

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
      <Link to={`/recipe/edit/${recipe.id}`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
      <Link to="/">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetails;
