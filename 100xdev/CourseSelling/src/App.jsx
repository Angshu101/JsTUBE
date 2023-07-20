import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup.jsx'
import UpBar from './UpBar.jsx'
import Signin from './Signin.jsx'
import Course from './Course.jsx'
import AddCourse from './AddCourse.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from './CourseDetails.jsx'
import {
  RecoilRoot
} from 'recoil';

function App() {


  return (
    <div style={{
      height:"300vh",
      width:"100vm",
      backgroundColor:"#eeeeee"
    }}>
    <RecoilRoot>
    <Router>
    <UpBar></UpBar>
      <Routes>
        <Route path='/AddCourse/:courseId' element={<CourseDetails/>}/>
        <Route path='/AddCourse' element={<AddCourse/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </RecoilRoot>
    </div>
  )
}

export default App
