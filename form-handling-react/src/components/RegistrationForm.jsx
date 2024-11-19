import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Registration successful!');
    setError('');
    setFormData({ username: '', email: '', password: '' }); // Reset form
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
