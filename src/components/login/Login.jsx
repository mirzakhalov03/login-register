import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: formData.email,
        password: formData.password
      });

      setSuccess('Login successful!');
      setError('');

      localStorage.setItem('token', response.data.access_token);
      
      
    } catch (err) {
      setError('Error logging in. Please check your credentials.');
      setSuccess('');
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        <p>Don't have an account? <Link className='oddiy-link' to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
