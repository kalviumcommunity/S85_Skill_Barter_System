import { useState, useEffect } from "react";
import API_BASE_URL from "../api";

function UserEntity() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/users`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold">Users in Skill Barter System</h2>
            {loading ? <p>Loading users...</p> : (
                <ul className="mt-4 space-y-4">
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <li key={user._id || index} className="p-4 border rounded-lg shadow">
                                <h3 className="text-lg font-bold">{user.name}</h3>
                                <p><strong>Skill Offered:</strong> {user.skillOffered}</p>
                                <p><strong>Skill Requested:</strong> {user.skillRequested}</p>
                                <p className="text-gray-600">{user.description}</p>
                            </li>
                        ))
                    ) : (
                        <p>No users found.</p>
                    )}
                </ul>
            )}
        </div>
    );
}

export default UserEntity;
