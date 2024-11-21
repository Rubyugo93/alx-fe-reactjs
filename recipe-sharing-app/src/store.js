// store.js
import create from 'zustand';

const useStore = create(set => ({
    favorites: [], // Holds the list of favorite items
    recommendations: [ // Example recommendations
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ],

    // Action to add an item to favorites
    addFavorite: (item) => set(state => ({
        favorites: [...state.favorites, item]
    })),

    // Action to remove an item from favorites
    removeFavorite: (id) => set(state => ({
        favorites: state.favorites.filter(item => item.id !== id)
    }))
}));

export default useStore;
