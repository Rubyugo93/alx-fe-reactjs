// src/components/recipeStore.js

import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // List of all recipes
  searchTerm: '', // Search term state
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to update searchTerm
  filteredRecipes: () => {
    return get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase()) // Filter recipes based on searchTerm
    );
  },
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
}));

export { useRecipeStore };
