import React from 'react'

const MovieCard = ({movie}) => {

  const fovoriteMovie = ()=>{
    alert('favorite btn Clicked')
  }

  return (
    <div className='bg-gray-600 max-w-58 rounded-xl text-white relative  py-2 pt-0'>
      <div>
        <img 
          className='h-68 w-full object-cover rounded-t'   
          src={movie.url} alt="movie.title" />
        <div>
          <button
            onClick={fovoriteMovie}
            className='bg-gray-100 px-2 text-sm py-1 text-center rounded-xl absolute top-0 active:scale-95 text-black font-medium right-0 m-4'
            >Add
          </button>
        </div>
      </div>
      
      <div>
        <h2 className='text-xl font-bold px-2 py-1'>{movie.title}</h2>
        <h4 className='text-sm font-medium px-2 '>{movie.releaseDate}</h4>
      </div>
    </div>
  )
}

export default MovieCard