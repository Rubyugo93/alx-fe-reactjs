import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function FormikForm() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Register with Formik</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form submitted:', values);
          alert('Registration successful!');
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Username:
                <Field
                  type="text"
                  name="username"
                  style={{ width: '100%', padding: '5px' }}
                />
              </label>
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: 'red' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Email:
                <Field
                  type="email"
                  name="email"
                  style={{ width: '100%', padding: '5px' }}
                />
              </label>
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: 'red' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>
                Password:
                <Field
                  type="password"
                  name="password"
                  style={{ width: '100%', padding: '5px' }}
                />
              </label>
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: 'red' }}
              />
            </div>
            <button
              type="submit"
              style={{ padding: '10px', width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
