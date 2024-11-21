import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
<<<<<<< HEAD
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
=======
  
  // Add a new recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  // Delete a recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),

  // Update an existing recipe
  updateRecipe: (recipeId, updatedData) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
    ),
  })),
>>>>>>> 05e2f33c1ac155b89e269210b14c9eeb185871b4
}));

export { useRecipeStore };
