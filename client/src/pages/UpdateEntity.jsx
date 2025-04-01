import React, { useState, useEffect } from "react";

const UpdateEntity = ({ userId, onClose, refreshList }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skillsOffered: [],
    skillsNeeded: [],
    bio: "",
  });

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setFormData(data))
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      refreshList(); // Refresh user list after update
      onClose(); // Close modal or refresh list
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await fetch(`http://localhost:5000/api/users/${userId}`, {
          method: "DELETE",
        });
        refreshList(); // Refresh user list after delete
        onClose(); // Close modal or refresh list
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Update User</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          className="w-full p-2 mb-2 border" 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          className="w-full p-2 mb-2 border" 
        />
        <input 
          type="text" 
          name="bio" 
          value={formData.bio} 
          onChange={handleChange} 
          placeholder="Bio" 
          className="w-full p-2 mb-2 border" 
        />
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
          <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEntity;
