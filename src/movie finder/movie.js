import React, { useState } from "react";
import axios from "axios";
import './movie.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Movie() {
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [expandedMovieIndex, setExpandedMovieIndex] = useState(-1);

  async function fetchData() {
    let movieData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f73acb2c27a6ffde17e9417313a8e9e2&language=en-US&query=${input}&page=1&include_adult=false`);
    setMovie(movieData.data.results);
    setIsDataFetched(true);
  }

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function changeHandler(e) {
    e.preventDefault();
    fetchData();
  }

  function toggleOverview(index) {
    if (expandedMovieIndex === index) {
      setExpandedMovieIndex(-1);
    } else {
      setExpandedMovieIndex(index);
    }
  }

  return (
    <>
      <header />
      <form onSubmit={changeHandler}>
        <input type="text" placeholder="Enter movie name" onChange={inputHandler} value={input} autoFocus></input>
        <button type="submit">Search</button>
      </form>
      <div className="wrapper">
        {isDataFetched && movie.length === 0 ? (
          <img className="dummy" src="https://dummyimage.com/300x300/000/ffffff&text=404:+MOVIE+NOT+FOUND" alt="404: Movie Not Found"></img>
        ) : (
          movie.map((element, index) => {
            const isExpanded = expandedMovieIndex === index;
            const truncatedOverview = element.overview.slice(0, 50);
            const fullOverview = element.overview;

            return (
              <div className="box" key={index}>
                <h3>{element.title}</h3>
               {element.poster_path ? <img src={`https://image.tmdb.org/t/p/original${element.poster_path}`} alt={"Image not found"}></img> : <img className="dummy" src="https://dummyimage.com/300x300/000/ffffff&text=+IMAGE+NOT+FOUND" alt="404: Movie Not Found"></img>}
                <p>{isExpanded ? fullOverview : truncatedOverview}</p>
                {element.overview.length > 50 && (
                  <button onClick={() => toggleOverview(index)}>
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Movie;
