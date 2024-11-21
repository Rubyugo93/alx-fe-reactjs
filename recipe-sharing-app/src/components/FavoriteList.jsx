// FavouritesList.js
import React from 'react';
import useStore from './store'; // Import the Zustand store

const FavouritesList = () => {
    const { favorites, removeFavorite } = useStore(state => ({
        favorites: state.favorites,
        removeFavorite: state.removeFavorite
    }));

    return (
        <div>
            <h2>Your Favorites</h2>
            <ul>
                {favorites.map(item => (
                    <li key={item.id}>
                        {item.name} 
                        <button onClick={() => removeFavorite(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesList;
