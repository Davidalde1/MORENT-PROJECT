import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import Details from './pages/Details';

const App = () => {
  return (
    <div className='bg-[#f4f5f6] px-[35]'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category' element={<Category/>} />
            <Route path='/details' element={<Details/>} />
          </Routes>
         <Footer/> 
       </BrowserRouter>
    </div>
  )
}

export default App
