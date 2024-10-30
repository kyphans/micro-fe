import React from 'react';
import { Link } from 'react-router-dom';

const users = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`
}));

export default function Users() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 border rounded hover:bg-gray-100">
            <Link to={`/users/${user.id}`} className="text-blue-500">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
