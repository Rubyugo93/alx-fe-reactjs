import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; // Import mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipe data on component mount
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 text-base">{recipe.summary}</p>
            </div>
            <div className="px-6 py-4">
              <a href="#" className="text-blue-500 hover:underline">View Recipe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
