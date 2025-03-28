import { useEffect, useState } from "react";
import AddUserPage from "../pages/AddUserPage";
import "../components/HomePage.css";

 // Import the new CSS

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/api/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="container">
      <h1 className="text-center">Skill Barter System</h1>
      <AddUserPage onUserAdded={fetchUsers} />

      <div className="mt-6">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}<br />
            <strong>Skills Needed:</strong> {user.skillsNeeded.join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
