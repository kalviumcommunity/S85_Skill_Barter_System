import React, { useEffect, useState } from "react";
import FilterByUserDropdown from "./FilterByUserDropdown";

const HomePage = () => {
  const [entities, setEntities] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    let url = "http://localhost:5000/api/users";
    if (selectedUserId) {
      url += `?created_by=${selectedUserId}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then(setEntities)
      .catch(console.error);
  }, [selectedUserId]);

  return (
    <div className="p-6">
      <FilterByUserDropdown onSelectUser={setSelectedUserId} />
      <div className="mt-4">
        {entities.map((user) => (
          <div key={user._id} className="p-4 mb-2 bg-gray-100 rounded">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p>{user.bio}</p>
            <p><strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}</p>
            <p><strong>Skills Needed:</strong> {user.skillsNeeded.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
