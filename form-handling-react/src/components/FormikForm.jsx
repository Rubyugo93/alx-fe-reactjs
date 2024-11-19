import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      alert('Form Submitted Successfully!');
      console.log('Form Data:', values);
    },
  });

  return (
    <div>
      <h2>Registration Form (Formik)</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          </label>
          {formik.touched.username && formik.errors.username && (
            <p style={{ color: 'red' }}>{formik.errors.username}</p>
          )}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: 'red' }}>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </label>
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: 'red' }}>{formik.errors.password}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormikForm;
