import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='h-screen w-full bg-gray-900 '>
      <div className='bg-gray-800 w-full '>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
    
  )
}

export default App