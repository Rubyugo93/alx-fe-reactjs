// src/components/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails'; // Import UserDetails component

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

export default UserInfo;
