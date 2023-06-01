import React, { useContext, useEffect } from 'react';
import { MovieContext } from './App';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Overview() {
  const { singleMovie, trailerKey, setTrailerKey } = useContext(MovieContext);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${singleMovie.id}/videos?api_key=f73acb2c27a6ffde17e9417313a8e9e2&language=en-US`)
      .then((response) => {
        // console.log(response.data.results[0].key);
        const trailer = response.data.results.find(obj => obj.site === "YouTube" && obj.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setTrailerKey(null);
        }
      });
  }, [singleMovie]);

  return (
    <div className='overview'>
      {singleMovie ? (
        <div className='overview-box'>
          {singleMovie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} alt='Image not found' />
          ) : (
            <img className='dummy' src='https://dummyimage.com/300x300/000/ffffff&text=+IMAGE+NOT+FOUND' alt='404: Movie Not Found' />
          )}
          <h1>{`Title- ${singleMovie.title}`}</h1>
          <h2>{`Release-Date : ${singleMovie.release_date}`}</h2>
          <p>{`Overview- ${singleMovie.overview}`}</p>
          <h3>{`Popularity-${singleMovie.popularity}`}</h3>
          <h3>{`Vote count-${singleMovie.vote_count}`}</h3>
          {
            trailerKey ? (<Link to='/trailer'>Watch Trailer</Link>) : (" ")
          }
          <Link to='/'>Go Back</Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Overview;
