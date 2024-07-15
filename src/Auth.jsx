import React from 'react'
import { Link } from 'react-router-dom'
import "./Auth.css"

const Auth = () => {
  return (
    <div className='auth'>
      <h1 className="title">Welcome</h1>
      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link></div>
    </div>
  )
}

export default Auth