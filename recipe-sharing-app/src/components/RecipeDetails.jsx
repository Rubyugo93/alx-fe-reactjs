import { useRecipeStore } from "../recipeStore"; // Import the store

const RecipeDetails = ({ recipeId }) => {
  // Find the recipe with the matching ID from the store
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <p>Recipe not found!</p>; // Show this if the recipe doesn’t exist
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;
