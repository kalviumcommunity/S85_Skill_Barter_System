import { useEffect, useState } from 'react';
import { fetchUsers } from '../api';
import UserEntity from './UserEntity';

const EntityList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.map(user => (
                <UserEntity key={user.id} user={user} />
            ))}
        </div>
    );
};

export default EntityList;
