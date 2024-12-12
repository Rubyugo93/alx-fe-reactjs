import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';  // Import Tailwind CSS styles

// Sample Mock Recipe Data (now includes ingredients and instructions)
const mockRecipeData = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "200g Spaghetti",
      "100g Pancetta",
      "2 large eggs",
      "50g Parmesan cheese",
      "50g Pecorino Romano cheese",
      "Black pepper, freshly ground",
      "Salt"
    ],
    instructions: [
      "Cook the spaghetti in salted boiling water until al dente.",
      "Fry the pancetta in a pan until crispy.",
      "Whisk the eggs with grated cheese and pepper.",
      "Combine the spaghetti, pancetta, and egg mixture. Toss until creamy.",
      "Serve with extra grated cheese and black pepper."
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "500g Chicken breast, cubed",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 tbsp ginger, minced",
      "2 tbsp curry powder",
      "200ml tomato puree",
      "200ml cream",
      "1 tbsp cilantro, chopped",
      "Salt and pepper"
    ],
    instructions: [
      "Marinate the chicken with spices and yogurt for 30 minutes.",
      "Grill the chicken pieces until cooked.",
      "Prepare the sauce with onion, garlic, ginger, curry powder, and tomato puree.",
      "Add cream and simmer until the sauce thickens.",
      "Add the chicken, cook for 10 more minutes.",
      "Serve with cilantro and rice."
    ]
  },
  {
    id: 3,
    title: "Vegetarian Tacos",
    summary: "A delicious and healthy taco with a variety of fresh vegetables, avocado, and a tangy sauce.",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "4 tortillas",
      "1 avocado, sliced",
      "1 cup corn kernels",
      "1 bell pepper, diced",
      "1 tomato, diced",
      "1/2 cup red onion, sliced",
      "Lettuce leaves",
      "Lime",
      "Salt, to taste",
      "Taco sauce"
    ],
    instructions: [
      "Warm the tortillas in a pan.",
      "Prepare the vegetables and avocado.",
      "Layer the tortillas with lettuce, vegetables, and avocado.",
      "Top with taco sauce and a squeeze of lime.",
      "Serve immediately."
    ]
  },
  {
    id: 4,
    title: "Beef Stew",
    summary: "A hearty and flavorful stew made with tender beef, vegetables, and rich broth.",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "500g beef stew meat, cubed",
      "3 carrots, sliced",
      "3 potatoes, diced",
      "1 onion, chopped",
      "4 cups beef broth",
      "2 garlic cloves, minced",
      "1 tbsp thyme",
      "Salt and pepper"
    ],
    instructions: [
      "Brown the beef cubes in a pot.",
      "Add the onion, garlic, and cook until softened.",
      "Add the carrots, potatoes, and beef broth.",
      "Simmer for 2 hours until tender.",
      "Season with thyme, salt, and pepper.",
      "Serve hot with crusty bread."
    ]
  }
];

// Define the RecipeDetail component for displaying a detailed view
const RecipeDetail = ({ match }) => {
  const recipe = mockRecipeData.find((r) => r.id === parseInt(match.params.id));
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-500 mb-4">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Ingredients</h3>
      <ul className="list-disc pl-5 space-y-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Cooking Instructions</h3>
      <ol className="list-decimal pl-5 space-y-2">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="text-gray-700">{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

// Define the HomePage component for listing all recipes
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
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
              <Link to={`/recipe/${recipe.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  View Recipe
                </button>
              </Link>
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

// Define the App component with Routes
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
