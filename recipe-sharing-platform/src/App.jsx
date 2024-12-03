import React, { useState, useEffect } from 'react';
import './index.css';  // Import Tailwind CSS styles

// Sample Mock Recipe Data
const mockRecipeData = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Vegetarian Tacos",
    summary: "A delicious and healthy taco with a variety of fresh vegetables, avocado, and a tangy sauce.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    title: "Beef Stew",
    summary: "A hearty and flavorful stew made with tender beef, vegetables, and rich broth.",
    image: "https://via.placeholder.com/150"
  }
];

// Define the App component
const App = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipe data (can be from an external file or API in real apps)
  useEffect(() => {
    // Simulate fetching data by using mockRecipeData directly
    setRecipes(mockRecipeData);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-500 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
      </header>

      <main className="mt-8 w-full max-w-screen-lg px-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Featured Recipes</h2>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-blue-500">{recipe.title}</h3>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                View Recipe
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full bg-gray-800 p-4 text-center text-white mt-8">
        <p>&copy; 2024 Recipe Sharing Platform | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
