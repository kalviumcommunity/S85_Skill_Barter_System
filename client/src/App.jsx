import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import UpdateEntity from "./pages/UpdateEntity"; // Ensure this is correctly imported

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="p-6">
      <HomePage users={users} onEdit={handleEdit} refreshList={fetchUsers} />
      {selectedUserId && (
        <UpdateEntity userId={selectedUserId} onClose={() => setSelectedUserId(null)} refreshList={fetchUsers} />
      )}
    </div>
  );
}

export default App;
