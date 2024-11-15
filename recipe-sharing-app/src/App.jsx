import './App.css'; // Import global styles
import RecipeList from './components/RecipeList'; // Import RecipeList component
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm component

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing App</h1>
      </header>
      
      {/* Add Recipe Form */}
      <AddRecipeForm />
      
      {/* Display List of Recipes */}
      <RecipeList />
    </div>
  );
}

export default App;
