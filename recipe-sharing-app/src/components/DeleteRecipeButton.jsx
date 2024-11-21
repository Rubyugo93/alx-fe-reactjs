import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access the delete action

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe
    alert("Recipe deleted successfully!");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
