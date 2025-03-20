const API_BASE_URL = "http://localhost:5000"; // Adjust port if needed
export default API_BASE_URL;
export const fetchUsers = async () => {
  const response = await fetch('http://localhost:5000/api/users');
  return response.json();
};

