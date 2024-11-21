// src/components/recipeStore.js

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '', // add searchTerm to the state
  setSearchTerm: (term) => set({ searchTerm: term }), // action to update searchTerm
  filteredRecipes: () => {
    return get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
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
