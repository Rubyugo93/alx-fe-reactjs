import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';  // Import Tailwind CSS styles

const mockRecipeData = [
  // Your existing mock recipe data here
];

const RecipeDetail = ({ match }) => {
  const recipe = mockRecipeData.find((r) => r.id === parseInt(match.params.id));
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Recipe detail content */}
    </div>
  );
};

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!instructions) newErrors.instructions = "Instructions are required";
    if (ingredients.split(',').length < 2) newErrors.ingredients = "At least two ingredients are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        summary: title,
        ingredients: ingredients.split(','),
        instructions: instructions.split('.'),
        image: "https://via.placeholder.com/150"
      };
      onAddRecipe(newRecipe);
      setTitle('');
      setIngredients('');
      setInstructions('');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add a New Recipe</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700">Ingredients (comma separated)</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="instructions" className="block text-gray-700">Instructions</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Add Recipe
      </button>
    </form>
  );
};

const App = () => {
  const [recipes, setRecipes] = useState(mockRecipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="w-full bg-blue-500 p-4 text-white text-center">
          <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        </header>

        <main className="mt-8 w-full max-w-screen-lg px-4">
          <Routes>
            <Route path="/" element={
              <>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Featured Recipes</h2>
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

                <Link to="/add-recipe">
                  <button className="mt-8 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Add New Recipe
                  </button>
                </Link>
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
          </Routes>
        </main>

        <footer className="w-full bg-gray-800 p-4 text-center text-white mt-8">
          <p>&copy; 2024 Recipe Sharing Platform | All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
