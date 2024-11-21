import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> {/* Link to home */}
      </nav>
      <Routes>
        <Route path="/" element={<RecipeList />} /> {/* Show list of recipes */}
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} /> {/* Show recipe details */}
      </Routes>
    </Router>
  );
};

const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
