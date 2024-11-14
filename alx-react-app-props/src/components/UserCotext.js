// src/UserContext.js
import React, { createContext, useContext } from 'react';

// Create the Context
const UserContext = createContext();

// Create a Provider component
export const UserProvider = ({ children }) => {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUser = () => {
  return useContext(UserContext);
};
