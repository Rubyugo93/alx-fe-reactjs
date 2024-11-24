// src/App.js
import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm'; // Controlled form
import FormikForm from './components/FormikForm'; // Formik-based form

const App = () => {
  return (
    <div className="App">
      <h1>User Registration</h1>

      <h2>Controlled Form:</h2>
      <RegistrationForm />

      <h2>Formik Form:</h2>
      <FormikForm />
    </div>
  );
};

export default App;
