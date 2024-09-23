import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Channel, Mainn, Navbar, Search, VideoDetails} from '../index'
import '@fontsource/roboto/400.css';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Mainn/>} />
        <Route path='/channel' element={<Channel/>} />
        <Route  path='/search' element={<Search/>} />
        <Route path='/video' element={<VideoDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App