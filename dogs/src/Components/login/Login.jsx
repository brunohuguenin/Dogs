import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  return (
    <div>
      <Routes>
      </Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/' element={<LoginCreate />} /> 
        <Route path='/' element={<LoginPasswordLost/>} /> 
        <Route path='/' element={<LoginPasswordReset/>} /> 
    </div>
  )
}

export default Login
