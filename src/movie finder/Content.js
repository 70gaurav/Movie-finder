import axios from 'axios'
import React, { useContext, useEffect, } from 'react'
import { MovieContext } from './App'
import { Link } from 'react-router-dom'
import Header from './Header'

function Movie() {
  const { value, movies, setMovies , fetch , singleMovie , setSingleMovie } = useContext(MovieContext)

  useEffect(() => {
    async function getMovies() {
      const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f73acb2c27a6ffde17e9417313a8e9e2&language=en-US&query=${value}&page=1&include_adult=false`)
      console.log(result.data.results)
      
    
      setMovies(result.data.results)
     
     
    }
    getMovies()
  }, [value])
  


  console.log(singleMovie)
  return (
    <><Header />
    <div className='wrapper'>
      
      {fetch && movies.length === 0 ? (<img src={"https://dummyimage.com/300x300/000/ffffff&text=+MOVIE+NOT+FOUND"}></img>) :(
        movies.map((movie, index) => {
          return (
            <div className='box' key={index}>
              <h2>{movie.title}</h2>
              {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={"Image not found"}></img> : <img className="dummy" src="https://dummyimage.com/300x300/000/ffffff&text=+IMAGE+NOT+FOUND" alt="404: Movie Not Found"></img>}
              <Link to={"/overview"} onClick={(e) => setSingleMovie(movie)} >click to know more</Link>

            </div>
          )
        })
      )}
    </div >
    </>
  )
}

export default Movie
