import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Assuming recipes are fetched and stored here
  favorites: [], // Array of recipe IDs
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId],
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),
  recommendations: [], // Array of recommended recipes
  generateRecommendations: () => set(state => {
    // Mock recommendation generation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
