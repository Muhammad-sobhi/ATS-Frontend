import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Job from './components/Job'
import CreateJob from './components/CreateJob'
import Application from './components/Application'
import JobDetail from './components/JobDetail'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ApplicationDetail from './components/ApplicationDetail'
import Profile from './components/Profile'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" replace />
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/jobs" element={<PrivateRoute><Job /></PrivateRoute>} />
        <Route path="/JobDetail/:id" element={<PrivateRoute><JobDetail /></PrivateRoute>} />
        <Route path="/jobs/create" element={<PrivateRoute><CreateJob /></PrivateRoute>} />
        <Route path="/application" element={<PrivateRoute><Application /></PrivateRoute>} />
        <Route path="/applicationDetail/:id" element={<PrivateRoute><ApplicationDetail /></PrivateRoute>} />
        <Route path="/profiles" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
