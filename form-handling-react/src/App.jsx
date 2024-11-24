

import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div className="App">
      <h1>Forms Example</h1>
      
      <h2>Controlled Form:</h2>
      <RegistrationForm />
      
      <h2>Formik Form:</h2>
      <FormikForm />
    </div>
  );
};

export default App;
