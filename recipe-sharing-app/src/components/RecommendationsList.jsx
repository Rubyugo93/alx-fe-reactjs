// RecommendationList.js
import React from 'react';
import useStore from './store'; // Import the Zustand store

const RecommendationList = () => {
    const { recommendations, addFavorite } = useStore(state => ({
        recommendations: state.recommendations,
        addFavorite: state.addFavorite
    }));

    return (
        <div>
            <h2>Recommendations</h2>
            <ul>
                {recommendations.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => addFavorite(item)}>Add to Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationList;
