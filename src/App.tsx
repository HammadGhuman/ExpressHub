import './App.css'
import { Route, Routes } from 'react-router-dom'
import SearchCourse from './Pages/SearchCourse'
import Dummy from './Pages/Homepage'
import SearchExperts from './Pages/SearchExperts'
import SeminarBootCamp from './Pages/SeminarBootCamp'
import Layout from './Pages/Layout'
import Homepage from './Pages/Homepage'

function App() {
 

  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route index element={<Homepage/>}></Route>
        <Route path='/seminarbootcamp' element={<SeminarBootCamp/>}></Route>
        <Route path='/searchcourses' element={<SearchCourse/>}></Route>
        <Route path='/searchexperts' element={<SearchExperts/>}></Route>
      </Route>
      
    </Routes>
  )
}

export default App
