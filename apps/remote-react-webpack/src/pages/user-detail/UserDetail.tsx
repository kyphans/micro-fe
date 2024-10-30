import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface UserData {
  id: string;
  name: string;
  email: string;
}

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if(!userId) {
      return;
    }

    // Simulate fetching user data based on userId
    const fetchUserData = async () => {
      // Fake response data
      const fakeUserData: UserData = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
      };
      setUserData(fakeUserData);
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <p><strong>ID:</strong> {userData.id}</p>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
};

export default UserDetail;