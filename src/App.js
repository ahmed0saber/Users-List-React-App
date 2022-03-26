import React from 'react'
import './App.css'
import Users from './components/users'
import Profile from './components/profile'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoProfile from './components/noprofile'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <div className="col">
        <h2>USERS LIST</h2>
        <div className="users-container">
          <Users/>
        </div>
      </div>
      <div className="col">
        <h2>USER DETAILS</h2>
        <Routes>
          <Route path="/" element={<NoProfile/>} />
          <Route path="/:id" element={<Profile/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
