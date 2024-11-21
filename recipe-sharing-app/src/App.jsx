import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './components/recipeStore';

const App = () => {
  // Accessing the store to check if there are any recommendations
  const { generateRecommendations } = useRecipeStore(state => state);

  // Generate recommendations on app load (optional)
  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>All Recipes</h2>
                <RecipeList />
              </div>
            }
          />
          <Route
            path="/favorites"
            element={
              <div>
                <h2>My Favorites</h2>
                <FavoritesList />
              </div>
            }
          />
          <Route
            path="/recommendations"
            element={
              <div>
                <h2>Recommended Recipes</h2>
                <RecommendationsList />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
