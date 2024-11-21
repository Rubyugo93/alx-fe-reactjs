
           
          // src/components/RegistrationForm.jsx

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Form validation schema with Yup
const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .max(15, 'Username must be less than 15 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});

const RegistrationForm = () => {

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        {/* Username */}
                        <div>
                            <label htmlFor="username">Username</label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                value={undefined} // Controlled component
                            />
                            <ErrorMessage name="username" component="div" />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                value={undefined} // Controlled component
                            />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                value={undefined} // Controlled component
                            />
                            <ErrorMessage name="password" component="div" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegistrationForm;
