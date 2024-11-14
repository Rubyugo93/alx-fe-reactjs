// src/components/UserProfile.jsx
import React from 'react';
import { useUserContext } from '../UserContext'; // Import useUserContext hook

function UserProfile() {
  const { name, email } = useUserContext(); // Consume userData from context

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserProfile;
