import React from 'react'
import './App.css'
import UserContextProvider from './Context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <UserContextProvider>
        <h1>Hello World</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
