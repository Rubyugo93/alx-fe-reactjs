// src/components/FormikForm.js
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // Initial values for the form
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    // You can replace this with an API call to submit the form data
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="p" />
          </div>

          <div>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="p" />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
