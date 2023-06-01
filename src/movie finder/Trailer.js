import React, { useContext } from 'react'
import { MovieContext } from './App'
import { Link } from 'react-router-dom'


function Trailer() {
    const {trailerKey} = useContext(MovieContext)
  return (
    <div className='overview'>
         {trailerKey ?  (
           <div className='overview-box'>
             <iframe
              title='Trailer'
              width='700'
              height='415'
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
            ></iframe>
            <Link to={"/"}>Home</Link>
           </div>
            
          
            ) : (
            ''
          )}
    </div>
  )
}

export default Trailer