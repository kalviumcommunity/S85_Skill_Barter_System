// src/components/EntityList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const EntityList = ({ users, refreshUsers }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      refreshUsers(); // Refresh UI after deletion
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid white", padding: "10px", margin: "10px 0" }}>
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}</p>
          <p><strong>Skills Needed:</strong> {user.skillsNeeded.join(", ")}</p>
          <button onClick={() => navigate(`/update/${user._id}`)}>Update</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EntityList;
