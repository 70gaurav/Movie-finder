import React, { useContext } from 'react'
import logo from "./Images/logo.png"
import movie from "./Images/movie.png"
import { MovieContext } from './App'

function Header() {
    const {input ,setInput ,setFetch , setValue , dark , setDark} = useContext(MovieContext)
    function submitHandler(e){
        e.preventDefault()
        setValue(input)
        setInput("")
        setFetch(true)
    }
  return (
    <div>
        <header>
            <div className='logo'><img src={logo}></img></div>
            <form onSubmit={submitHandler}>
                <input placeholder='Enter Movie or Show name' value={input} autoFocus onChange={(e) =>setInput(e.target.value) }></input>
                <button>Search</button>
            </form>
            
            <div className='logo'><img src={movie}></img></div>
        </header>
    </div>
  )
}

export default Header