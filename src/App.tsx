import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import SearchCourse from './Pages/SearchCourse'
import Dummy from './Pages/Dummy'
import SearchExperts from './Pages/SearchExperts'
import SeminarBootCamp from './Pages/SeminarBootCamp'

function App() {
 

  return (
    <Routes>
      <Route element={<Homepage/>} >
        <Route index element={<Dummy/>}></Route>
        <Route path='/seminarbootcamp' element={<SeminarBootCamp/>}></Route>
        <Route path='/searchcourses' element={<SearchCourse/>}></Route>
        <Route path='/searchexperts' element={<SearchExperts/>}></Route>
      </Route>
      
    </Routes>
  )
}

export default App
