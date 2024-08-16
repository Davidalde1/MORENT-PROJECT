import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import Details from './pages/Details';
import Payment from './pages/Payment';

const App = () => {
  return (
    <div className='bg-[#f4f5f6] px-[30]'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category' element={<Category/>} />
            <Route path='/details/:id' element={<Details/>} />
            <Route path='/payment' element={<Payment/>} />
          </Routes>
         <Footer/> 
       </BrowserRouter>
    </div>
  )
}

export default App
