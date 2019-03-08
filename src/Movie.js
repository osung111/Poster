import React,{useContext,useState} from 'react';
import './Movie.css'


function Movie({setTitle,title,poster,key}) {
        
    const Vf =() => {

    }

    return (
        <div onClick={() => {setTitle(title)} } className="Card">
            {title}
            <br/>
            <img src={poster} />
            
        </div>
    )
}



export default Movie;