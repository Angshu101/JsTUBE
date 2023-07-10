import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup.jsx'
import NavBar from './NavBar.jsx'


function App() {


  return (
    <div style={{
      height:"100vh",
      width:"100vm",
      backgroundColor:"#eeeeee"
    }}>
     <NavBar></NavBar>
      <Signup></Signup>
    </div>
  )
}

export default App
