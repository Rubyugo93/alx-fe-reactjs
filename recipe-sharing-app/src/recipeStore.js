// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Set search term in the state
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Optional: Additional actions for managing recipes
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set(state => ({ 
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  }))
}));

export { useRecipeStore };
