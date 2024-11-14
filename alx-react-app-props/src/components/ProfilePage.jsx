// src/components/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo'; // Import UserInfo component
import { useUser } from '../UserContext'; // Import useUser hook to consume context

function ProfilePage() {
  // Use the context to get user data
  const userData = useUser();

  return (
    <div>
      <h1>Profile Page</h1>
      {/* Pass userData to UserInfo component */}
      <UserInfo userData={userData} />
    </div>
  );
}

export default ProfilePage;
