// src/services/githubService.js
import axios from "axios";

// Base GitHub API URL
const API_URL = "https://api.github.com";

// Fetch API key from environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Function to fetch GitHub user data by username with advanced search
export const fetchUserData = async (username, location = "", repoCount = "") => {
  try {
    // Construct search query for advanced search
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (repoCount) query += `+repos:>=${repoCount}`;

    // Make the GET request to the GitHub API with the username and API key
    const response = await axios.get(`${API_URL}/search/users?${query}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    // Return the first user from search results
    return response.data.items[0]; // Assuming we want the first match from search results
  } catch (error) {
    // Handle errors if API request fails
    console.error("Error fetching user data:", error);
    throw new Error("Unable to fetch user data. Please try again.");
  }
};
