import React from "react";
import { useState } from "react";
import axios from "axios";
import './movie.css'

function Movie() {
    const [movie, setmovie] = useState([]);
    const [input, setinput] = useState("");
    const [isDataFetched, setIsDataFetched] = useState(false);
  
    async function fetchdata() {
      let moviedata = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f73acb2c27a6ffde17e9417313a8e9e2&language=en-US&query=${input}&page=1&include_adult=false`);
      setmovie(moviedata.data.results);
      setIsDataFetched(true);
    }
  
    function inputhandler(e) {
      setinput(e.target.value);
    }
  
    function changehandler(e) {
      e.preventDefault();
      fetchdata();
    }
  
    return (
      <>
        <header />
        <form onSubmit={changehandler}>
          <input type="text" placeholder="Enter movie name" onChange={inputhandler} value={input} autoFocus></input>
          <button type="submit">Search</button>
        </form>
        <div className="wrapper">
          {isDataFetched && movie.length === 0 ? (
            <img className="dummy" src="https://dummyimage.com/300x300/000/ffffff&text=404:+MOVIE+NOT+FOUND"></img>
          ) : (
            movie.map((element, index) => {
              return (
                <div className="box" key={index}>
                  <h3>{element.title}</h3>
                  <img src={`https://image.tmdb.org/t/p/original${element.poster_path}`} alt={"image not found"}></img>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
export default Movie  