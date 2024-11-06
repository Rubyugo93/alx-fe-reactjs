// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = () => {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    margin: '10px 0',
  };

  const bioStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://www.w3schools.com/w3images/avatar2.png"
        alt="User Avatar"
        style={imageStyle}
      />
      <h2 style={nameStyle}>John Doe</h2>
      <p style={bioStyle}>Web Developer. Passionate about building beautiful websites and applications.</p>
    </div>
  );
};

export default UserProfile;
