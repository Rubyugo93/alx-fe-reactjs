// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the API function

function Search() {
  const [username, setUsername] = useState(""); // State to hold input value
  const [location, setLocation] = useState(""); // State to hold location input
  const [repoCount, setRepoCount] = useState(""); // State to hold minimum repository count
  const [user, setUser] = useState(null); // State to hold fetched user data
  const [error, setError] = useState(""); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!username) return;

    setLoading(true); // Start loading
    setError(""); // Clear previous errors

    try {
      const data = await fetchUserData(username, location, repoCount); // Fetch user data with advanced search parameters
      setUser(data); // Set the user data
    } catch (err) {
      setError["Looks like we cant find the user"]; // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location (optional)"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <input
            type="number"
            value={repoCount}
            onChange={(e) => setRepoCount(e.target.value)}
            placeholder="Minimum repos (optional)"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading text */}
      {error && <p>{error}</p>} {/* Show error message */}

      {user && (
        <div>
          <h2>{user.login}</h2> {/* Display GitHub username (login) */}
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width="100"
            height="100"
          /> {/* Display avatar */}
          <p>GitHub Profile: <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a></p> {/* Profile link */}
          <p>Location: {user.location || "N/A"}</p> {/* Display location */}
          <p>Repositories: {user.public_repos}</p> {/* Display number of repositories */}
        </div>
      )}
    </div>
  );
}

export default Search;