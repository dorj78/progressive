import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Centralized base URL for all API calls

/**
 * Fetches all users from the backend.
 * @returns {Promise<Object[]>} Array of user objects
 * @throws {Error} If the request fails
 */
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Re-throw to allow caller to handle
  }
};

/**
 * Creates a new user in the backend.
 * @param {Object} user - User data to create
 * @returns {Promise<Object>} Created user object
 * @throws {Error} If the request fails
 */
export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/`, user);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

/**
 * Submits survey responses to the backend.
 * @param {Object} submission - Survey submission data { responses: { [key: string]: number }, user_id: number }
 * @returns {Promise<Object>} Response containing question_mn
 * @throws {Error} If the request fails
 */
export const submitSurvey = async (submission) => {
  try {
    const response = await axios.post(`${API_URL}/survey/submit`, submission);
    return response.data;
  } catch (error) {
    console.error("Error submitting survey:", error);
    throw error;
  }
};