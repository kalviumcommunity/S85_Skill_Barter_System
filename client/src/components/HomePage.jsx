import { useEffect, useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        console.log("Fetched Users:", data); // ✅ Debugging Log
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Skill Barter System</h1>

      {loading && <p className="text-center">Loading users...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {users.length === 0 ? (
          <p className="text-center">No users found</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user._id} className="p-4 border-b">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.bio}</p>
                <div className="mt-2">
                  <strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}
                </div>
                <div>
                  <strong>Skills Needed:</strong> {user.skillsNeeded.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
