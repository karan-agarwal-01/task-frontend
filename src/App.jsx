import { ToastContainer } from 'react-toastify'
import './App.css'
import Login from './components/Login'
import Onboarding from './components/Onboarding'
import OnboardingComplete from './components/OnboardingDone'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import HomePage from './components/Home'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
        <Route path='/onboarding' element={<PrivateRoute><Onboarding /></PrivateRoute>} />
        <Route path='/onboarding/complete' element={<PrivateRoute><OnboardingComplete /></PrivateRoute>} />
        
        <Route path='/home' element={<PrivateRoute><HomePage /></PrivateRoute>} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </Router>
  )
}

export default App
