import React from "react";

const HomePage = ({ users, onEdit, refreshList }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map((user) => (
          <li 
            key={user._id} 
            className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-lg"
          >
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}</p>
            </div>
            <button 
              onClick={() => onEdit(user._id)} 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
