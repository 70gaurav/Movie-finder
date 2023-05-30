import React, { createContext, useState } from 'react'
import Movie from './Content'
import "./movie.css"
import Overview from './Overview'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Error from './Error'
export const MovieContext = createContext(null)




function App() {
    const [movies , setMovies] = useState([])
    const [singleMovie , setSingleMovie] = useState([])
    const [value , setValue] = useState("")
    const [input , setInput] = useState("")
    const [fetch , setFetch] = useState(false)

    return (
        <MovieContext.Provider value={{movies , setMovies , singleMovie , setSingleMovie , input , setInput , value , setValue , fetch , setFetch }}>
            <BrowserRouter>
            
            <Routes>
                <Route path='/' element={ <Movie />}></Route>
                <Route path='/overview' element={<Overview />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
            </BrowserRouter>
           
           
        </MovieContext.Provider>
    )
}

export default App