import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../Services/api'



const Home = () => {

  const [searchQuery, setSearchQuery]= useState('')
  const [movies, setMOvies] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMOvies(popularMovies)
        console.log(popularMovies)
      } 
      catch(err) {
        console.log(err)
        setError("Failed to load error")
      }
      finally{
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  useEffect(()=>{
    const userSearchMovies = async ()=>{
      const userMovies = await searchMovies(searchQuery)
      setMOvies(userMovies)
    }
    userSearchMovies()
  },[searchQuery])
  

  const submitHandler = (e)=>{
    e.preventDefault()
    setSearchQuery('')

  }
  const searchHandler = (e)=>{
    const value =  e.target.value;
    if(value.trim() == ''){
      setSearchQuery('')
      return
    }
    setSearchQuery(value)
  }


  return (
    <div className='px-8 py-2'>
      
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
            className='text-lg text-white bg-gray-600  rounded px-6 py-1 placeholder:text-gray-300 outline-none'
            type="text" 
            value={searchQuery}
            placeholder='Search movies..' 
          />
          <button 
            type='submit'
            className='bg-red-600 text-gray-50 font-medium rounded px-4 py-1 active:scale-90'>
            Search
          </button>
        </form>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex gap-3 flex-wrap justify-center'>
          {movies.map((elem,idx)=>{
            return <MovieCard movie={elem} key={idx}/>
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export default Home