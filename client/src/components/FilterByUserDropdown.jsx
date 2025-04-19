import React, { useEffect, useState } from "react";

const FilterByUserDropdown = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <select onChange={(e) => onSelectUser(e.target.value)} className="p-2 border rounded">
      <option value="">Filter by User</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  );
};

export default FilterByUserDropdown;
