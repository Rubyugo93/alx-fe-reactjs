import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate personalized recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Set recipes list (this could be fetched from an API or hardcoded)
  setRecipes: (newRecipes) => set({ recipes: newRecipes })
}));

export { useRecipeStore };
