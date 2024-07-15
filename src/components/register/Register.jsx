import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    image: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/users/', {
        name: formData.username,
        email: formData.email,
        password: formData.password,
        avatar: formData.image
      });
      setSuccess('User registered successfully!');
      setError('');
    } catch (err) {
      setError('Error registering user.');
      setSuccess('');
    }
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder='Image URL'
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        <p>Already have an account? <Link className="oddiy-link" to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
