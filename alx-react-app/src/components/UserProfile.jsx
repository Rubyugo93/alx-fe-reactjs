// src/components/UserProfile.jsx

import React from 'react';
import PropTypes from 'prop-types';

// Define the UserProfile component
const UserProfile = ({ name, age, location }) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// Add PropTypes for prop validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserProfile;
