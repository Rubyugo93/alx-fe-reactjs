// src/services/githubService.js
import axios from "axios";

const API_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
    const response = await axios.get(`${API_URL}/users/${username}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    return response.data;
};
