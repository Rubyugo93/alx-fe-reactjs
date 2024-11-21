import create from 'zustand'; // Zustand helps us manage state (data).

// Create the store
const useRecipeStore = create((set) => ({
  recipes: [], // Start with an empty list of recipes

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe], // Add the new recipe to the list
    })),

  // Edit an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete a recipe
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId), // Remove the recipe
    })),
}));

export { useRecipeStore }; // Export the store so we can use it in other files.
