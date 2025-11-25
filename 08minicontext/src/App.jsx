import { useState } from 'react'
import UserContextProvider from './context/UsercontextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App(){
  
  return (
    <UserContextProvider>
      <h1>hello guyz</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
