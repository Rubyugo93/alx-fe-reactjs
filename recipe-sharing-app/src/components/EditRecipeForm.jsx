import { useState } from "react";
import { useRecipeStore } from "../recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe); // Access the update action
  const [title, setTitle] = useState(recipe.title); // Use state to manage title
  const [description, setDescription] = useState(recipe.description); // Manage description

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    updateRecipe({ ...recipe, title, description }); // Update the recipe in the store
    alert("Recipe updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title when the user types
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update description
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
