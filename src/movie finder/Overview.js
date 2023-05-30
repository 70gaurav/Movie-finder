import React, { useContext } from 'react'
import { MovieContext } from './App'
import { Link } from 'react-router-dom'


function Overview() {
    const {singleMovie} = useContext(MovieContext)
  return (
    <div className='overview'>
        {
            singleMovie ? (
                (<div className='overview-box'>
                    {singleMovie.poster_path ? <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} alt={"Image not found"}></img> : <img className="dummy" src="https://dummyimage.com/300x300/000/ffffff&text=+IMAGE+NOT+FOUND" alt="404: Movie Not Found"></img>}
                    <h1>{`Title- ${singleMovie.title}`}</h1>
                    <h2>{`Release-Date : ${singleMovie.release_date}`}</h2>
                    <h3>{`Overview- ${singleMovie.overview}`}</h3>
                    <h3>{`Popularity-${singleMovie.popularity}`}</h3>
                    <h3>{`Vote count-${singleMovie.vote_count}`}</h3>
                    <Link to={"/"}>Go Back</Link>
                </div>)
            ) : " "
        }
    </div>
  )
}

export default Overview