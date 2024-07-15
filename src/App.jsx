import './App.css'
import Auth from './Auth'
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
