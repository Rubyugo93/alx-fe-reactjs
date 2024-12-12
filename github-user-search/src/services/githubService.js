// src/services/githubService.js
import axios from "axios";

// Base GitHub API URL
const API_URL = "https://api.github.com";

// Fetch API key from environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Function to fetch GitHub user data by username with advanced search
export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // Construct the query parameters for the search
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`; // Add minRepos to query if provided

    // Make the GET request to the GitHub API with the search query and API key
    const response = await axios.get(`${API_URL}/search/users?${query}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`, // Use the API key for authorization
      },
    });

    // Return the first user from the search results (assuming the first match is the intended one)
    return response.data.items[0];
  } catch (error) {
    // Handle errors if API request fails
    console.error("Error fetching user data:", error);
    throw new Error("Unable to fetch user data. Please try again.");
  }
};
