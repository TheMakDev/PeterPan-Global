import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
