// src/components/UserProfile.jsx

import React from 'react';

const UserProfile = ({ name, age, location }) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default UserProfile;
