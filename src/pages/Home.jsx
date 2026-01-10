import React, { useState } from 'react'

import MovieCard from '../components/MovieCard'

const Home = () => {

  
  const [searchQuery, setSearchQuery]= useState('')
  const movies = [
    {id: 1, title: 'Dhurander', releaseDate: 2025, url : "dummy/dummyMovieImage.jpg"},
    {id: 2, title: 'Premalu', releaseDate: 2014, url : "dummy/dummyMovieImage.jpg"},
    {id: 3, title: 'Comdrade', releaseDate: 2015, url : "dummy/dummyMovieImage.jpg"},
    {id: 4, title: 'Geeta Govinda', releaseDate: 2005, url : "dummy/dummyMovieImage.jpg"},
    {id: 5, title: 'Krrish 3', releaseDate: 2006, url : "dummy/dummyMovieImage.jpg"},
  ]

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(searchQuery)
    setSearchQuery('')

  }
  const searchHandler = (e)=>{
    if(e.target.value.trim != ''){
      setSearchQuery(e.target.value)

    }
  }


  return (
    <div>
      <div className='my-3'>
         <div className=' px-6 py-3 '>
        <form 
          className='flex w-full items-center justify-center gap-6 '
          onSubmit={(e)=>{
            submitHandler(e)
          }}
        >
          <input 
            onChange={(e)=>{
              searchHandler(e)
            }}
            className='text-xl text-white bg-gray-600 font-medium rounded px-6 py-1 placeholder:text-gray-300 outline-none'
            type="text" 
            value={searchQuery}
            placeholder='Search movies..' 
          />
          <button 
            type='submit'
            className='bg-emerald-600 text-gray-900 rounded px-4 py-1 active:scale-90'>
            Search
          </button>
        </form>
        </div>
      </div>
      <div className='flex gap-3 flex-wrap items-center '>
       {movies.map((elem,idx)=>{
          return <MovieCard movie={elem} key={idx}/>
       })}
      </div>
      
    </div>
  )
}

export default Home