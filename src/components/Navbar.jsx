import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-8 pt-4 pb-2 flex items-center justify-between text-gray-100'>
      <Link className='text-xl font-bold underline' to='/'> D-Movie</Link>
      <div className='flex items-center gap-10'>
        <Link className='text-lg font-medium ' to='/' >Home</Link>
        <Link className='text-lg font-medium ' to='/favorites' >Favorites</Link>
      </div>
    </div>
  )
}

export default Navbar